// // Background1.js
// const Background1 = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {/* Red highlight positioned at the top-right corner */}
//       <div className="absolute -top-4 -right-6 w-[500px] h-[200px] bg-[#721515] opacity-60 rounded-full blur-[80px] pointer-events-none" />

//       {/* Diagonal lines effect */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage:
//             "linear-gradient(135deg, rgba(40, 40, 40, 0.7) 6px, transparent 1px)",
//           backgroundSize: "15px 15px",
//           opacity: 0.8,
//         }}
//       />
//     </div>
//   );
// };

// export default Background1;// Background1.js
// Background1.js
const Background1 = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Red highlight positioned at the top-right corner */}
      <div className="absolute top-0 right-0 w-[400px] h-[200px] bg-[#721515] opacity-60 rounded-full blur-[80px] pointer-events-none" />

      {/* Diagonal lines effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-135deg, rgba(40, 40, 40, 0.7), rgba(40, 40, 40, 0.7) 1px, transparent 1px, transparent 15px)",
          backgroundSize: "15px 15px",
          opacity: 0.7,
        }}
      />
    </div>
  );
};

export default Background1;
