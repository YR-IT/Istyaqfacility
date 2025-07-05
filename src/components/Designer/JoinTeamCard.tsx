// components/JoinTeamCard.tsx
import React from 'react';

const JoinTeamCard: React.FC = () => {
  return (
    <div className="text-center mt-12">
      <div className="bg-amber-100 rounded-2xl p-8 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-amber-900 mb-4">
          Want to Join Our Expert Team?
        </h3>
        <p className="text-amber-800 mb-6">
          We're always looking for talented professionals to join our team and help clients create beautiful spaces.
        </p>
        <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
          Join Our Team
        </button>
      </div>
    </div>
  );
};

export default JoinTeamCard;
