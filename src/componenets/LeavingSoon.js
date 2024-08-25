import React from 'react';

const LeavingSoonPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Leaving Soon</h2>
        <p className="text-gray-600 mb-8">Are you sure you want to sign out?</p>
        <div className="flex justify-center space-x-4">
          <button 
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={() => {
              // Sign out logic here
              console.log("Signed Out");
              onClose(); // Close the popup after signing out
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeavingSoonPopup;
