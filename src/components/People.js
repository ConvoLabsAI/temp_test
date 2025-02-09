// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const People = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(true);
  
//   const people = [
//     {
//       name: "Sarah Johnson",
//       role: "AI Research Lead",
//       email: "sarah.j@convolabs.ai",
//       phone: "+1 (555) 123-4567",
//       image: "https://cdn.vectorstock.com/i/500p/07/35/cute-girl-face-in-cartoon-style-vector-47890735.jpg"
//     },
//     {
//       name: "Michael Chen",
//       role: "Senior Data Scientist",
//       email: "michael.c@convolabs.ai",
//       phone: "+1 (555) 234-5678",
//       image: "https://img.freepik.com/free-vector/smiling-cartoon-mans-face_1308-174269.jpg"
//     },
//     {
//       name: "Elena Rodriguez",
//       role: "ML Engineer",
//       email: "elena.r@convolab.ai",
//       phone: "+1 (555) 345-6789",
//       image: "https://img.freepik.com/free-vector/male-teen-cartoon-wearing-hat_1308-157110.jpg"
//     },
//     {
//       name: "Alex Kim",
//       role: "Research Scientist",
//       email: "alex.k@convolabs.ai",
//       phone: "+1 (555) 456-7890",
//       image: "https://thumbs.dreamstime.com/b/businessman-cartoon-character-people-face-profiles-avatars-icons-close-up-image-pointing-man-vector-flat-illustration-234310250.jpg"
//     },
//     {
//       name: "Glenn Smith",
//       role: "Web Developer",
//       email: "glenn.s@convolabs.ai",
//       phone: "+1 (555) 456-1203",
//       image: "https://cdn2.vectorstock.com/i/1000x1000/81/01/man-with-beard-only-face-vector-23318101.jpg"
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0, scale: 0.8, y: 50 },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       y: 0,
//       transition: { 
//         duration: 0.7,
//         type: "spring",
//         stiffness: 100,
//         damping: 10
//       }
//     },
//     exit: { 
//       opacity: 0, 
//       scale: 0.8, 
//       y: -50,
//       rotate: -180,
//       transition: { duration: 0.5 }
//     }
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIsVisible(false);
//       setTimeout(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % people.length);
//         setIsVisible(true);
//       }, 500);
//     }, 4000);

//     return () => clearInterval(timer);
//   }, []);

//   const currentPerson = people[currentIndex];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 px-4 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-gradient-to-r from-blue-100/40 to-purple-100/40"
//             style={{
//               width: Math.random() * 300 + 50,
//               height: Math.random() * 300 + 50,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               scale: [1, 1.2, 1],
//               x: [0, Math.random() * 100 - 50, 0],
//               y: [0, Math.random() * 100 - 50, 0],
//             }}
//             transition={{
//               duration: Math.random() * 10 + 5,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <motion.h2 
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-5xl font-bold text-center text-gray-800 mb-16"
//         >
//           Our Amazing Team
//         </motion.h2>
        
//         <div className="flex justify-center items-center">
//           <div className="relative">
//             {/* Outer rotating ring */}
//             <motion.div 
//               className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200 to-purple-200 opacity-60"
//               style={{ width: '400px', height: '400px' }}
//               animate={{ 
//                 rotate: 360,
//                 scale: [1, 1.05, 1]
//               }}
//               transition={{
//                 rotate: {
//                   duration: 10,
//                   repeat: Infinity,
//                   ease: "linear"
//                 },
//                 scale: {
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }
//               }}
//             />
            
//             {/* Inner rotating ring */}
//             <motion.div 
//               className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-200 to-indigo-200 opacity-60"
//               style={{ width: '350px', height: '350px', margin: '25px' }}
//               animate={{ 
//                 rotate: -360,
//                 scale: [1.05, 1, 1.05]
//               }}
//               transition={{
//                 rotate: {
//                   duration: 8,
//                   repeat: Infinity,
//                   ease: "linear"
//                 },
//                 scale: {
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: 1
//                 }
//               }}
//             />
            
//             <AnimatePresence mode="wait">
//               {isVisible && (
//                 <motion.div
//                   key={currentIndex}
//                   variants={containerVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   className="relative bg-white/70 backdrop-blur-lg rounded-full shadow-xl p-8"
//                   style={{ width: '300px', height: '300px', margin: '50px' }}
//                 >
//                   <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/80 to-white/40"></div>
//                   <div className="relative h-full flex flex-col items-center justify-center">
//                     <motion.div 
//                       className="relative mb-4"
//                       whileHover={{ scale: 1.1 }}
//                       transition={{ type: "spring", stiffness: 300 }}
//                     >
//                       <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-white/70 shadow-lg">
//                         <img
//                           src={currentPerson.image}
//                           alt={currentPerson.name}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <motion.div
//                         className="absolute inset-0 rounded-full border-2 border-blue-200"
//                         animate={{
//                           scale: [1, 1.2, 1],
//                           rotate: 360
//                         }}
//                         transition={{
//                           duration: 3,
//                           repeat: Infinity,
//                           ease: "linear"
//                         }}
//                       />
//                     </motion.div>
                    
//                     <motion.h3
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.2 }}
//                       className="text-xl font-bold text-gray-800 text-center mb-1"
//                     >
//                       {currentPerson.name}
//                     </motion.h3>
                    
//                     <motion.p
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.3 }}
//                       className="text-blue-600 font-medium text-sm mb-3"
//                     >
//                       {currentPerson.role}
//                     </motion.p>
                    
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.4 }}
//                       className="text-gray-600 text-sm text-center"
//                     >
//                       <p className="mb-1">{currentPerson.email}</p>
//                       <p>{currentPerson.phone}</p>
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>

//         <div className="flex justify-center space-x-3 mt-8">
//           {people.map((_, index) => (
//             <motion.button
//               key={index}
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => {
//                 setIsVisible(false);
//                 setTimeout(() => {
//                   setCurrentIndex(index);
//                   setIsVisible(true);
//                 }, 500);
//               }}
//               className={`w-3 h-3 rounded-full transition-colors duration-300 ${
//                 index === currentIndex ? 'bg-blue-500' : 'bg-blue-200'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default People;