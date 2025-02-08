import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhone, FaArrowRight, FaSpinner } from 'react-icons/fa';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { FaCheckCircle } from 'react-icons/fa';


const firebaseConfig = {

  apiKey: "AIzaSyBEDsdT1lMeuTyikvK8t6-CG6cTt6CSWzA",

  authDomain: "convolabs-7fd36.firebaseapp.com",

  projectId: "convolabs-7fd36",

  storageBucket: "convolabs-7fd36.firebasestorage.app",

  messagingSenderId: "752996689400",

  appId: "1:752996689400:web:c91bbeef38b89cc3bca20d",

  measurementId: "G-0VLMRWY6PG"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ConversationalAuth = () => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [currentError, setCurrentError] = useState('');
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();

  const questions = [
    {
      text: "Hi there! 👋 What's your name?",
      field: 'name',
      icon: <FaUser className="text-purple-500" size={24} />,
      validation: (value) => value.length >= 2 ? '' : 'Please enter your full name',
      placeholder: 'Enter your full name'
    },
    {
      text: "Great to meet you! What's your email address?",
      field: 'email',
      icon: <FaEnvelope className="text-purple-500" size={24} />,
      validation: (value) => /\S+@\S+\.\S+/.test(value) ? '' : 'Please enter a valid email',
      placeholder: 'Enter your email address'
    },
    {
      text: "Almost done! What's your contact number?",
      field: 'phone',
      icon: <FaPhone className="text-purple-500" size={24} />,
      validation: (value) => /^\+?[\d\s-]{10,}$/.test(value) ? '' : 'Please enter a valid phone number',
      placeholder: 'Enter your contact number'
    }
  ];

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !currentError) {
      handleNext();
    }
  };

  const handleNext = async () => {
    const currentQuestion = questions[step];
    const validationError = currentQuestion.validation(userData[currentQuestion.field]);
  
    if (validationError) {
      setCurrentError(validationError);
      return;
    }
  
    if (step < questions.length - 1) {
      setStep(step + 1);
      setCurrentError('');
    } else {
      setLoading(true);
      try {
        // Add user to Firestore queue
        const queueRef = collection(db, 'queue');
        await addDoc(queueRef, {
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
          timestamp: new Date().toISOString(),
          status: 'waiting'
        });
  
        // Skip the queue position logic and show confirmation immediately
        setMessage(`🎉 Thank you, ${userData.name}! Your registration is complete.`);
        setLoading(false);
        setRegistrationComplete(true);
        setShowSuccessMessage(true);
  
      } catch (error) {
        console.error('Error during registration:', error);
        setLoading(false);
        setMessage(`Error: ${error.message}`);
      }
    }
  };
  
  

  const handleInputChange = (e) => {
    const { value } = e.target;
    setUserData({ ...userData, [questions[step].field]: value });
    setCurrentError('');
  };

  const progress = ((step + 1) / questions.length) * 100;

  const Header = () => (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-700">Queue Demo</h1>
        {registrationComplete && (
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transform transition hover:scale-105"
          >
            Go to Dashboard
          </button>
        )}
      </div>
    </div>
  );

  const SuccessMessage = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
          <FaCheckCircle className="w-12 h-12 text-green-500" />
        </div>
        <h3 className="text-3xl font-bold text-purple-700 mb-4">{message}</h3>
        <div className="bg-purple-50 rounded-lg p-6 mb-6 animate-slide-up">
          <p className="text-lg text-gray-700 mb-4">
            Your registration is successful! 🎉
          </p>
          <p className="text-gray-600 mb-2">We will contact you at: {userData.phone}</p>
          <p className="text-gray-600 mb-4">Updates will be sent to: {userData.email}</p>
          <p className="text-sm text-purple-600">Thank you for joining us!</p>
        </div>
        <button
          onClick={() => navigate('/dashboard')}
          className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transform transition hover:scale-105 flex items-center justify-center space-x-2 mx-auto animate-fade-in"
        >
          <span>Go to Dashboard</span>
          <FaArrowRight size={16} />
        </button>
      </div>
    </div>
  );
  

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-purple-100 to-purple-200 pt-16">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md border border-purple-300 transform transition-all duration-500">
          <div className="space-y-6">
            <h2 className="text-3xl text-center text-purple-700 font-bold mb-8">
              Join the Waitlist
            </h2>
            
            {!registrationComplete && (
              <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div 
                  className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}

            {!loading && !registrationComplete && (
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  {questions[step].icon}
                  <div className="flex-1">
                    <p className="text-lg text-gray-800 mb-4">{questions[step].text}</p>
                    <input
                      type={questions[step].field === 'email' ? 'email' : 'text'}
                      value={userData[questions[step].field]}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                      className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-800"
                      placeholder={questions[step].placeholder}
                      autoFocus
                    />
                    {currentError && (
                      <p className="text-red-500 text-sm mt-2">{currentError}</p>
                    )}
                  </div>
                </div>
                
                <button
                  onClick={handleNext}
                  className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transform transition hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>{step === questions.length - 1 ? 'Complete Registration' : 'Continue'}</span>
                  <FaArrowRight size={16} />
                </button>
              </div>
            )}

            {loading && (
              <div className="text-center py-12">
                <FaSpinner className="animate-spin h-12 w-12 text-purple-500 mx-auto mb-4" />
                <p className="text-gray-600">Processing your registration...</p>
                <p className="text-sm text-gray-500 mt-2">Almost there!</p>
              </div>
            )}

            {showSuccessMessage && <SuccessMessage />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConversationalAuth;