import React from "react";

interface ProfileCardProps {
  name: string;
  title: string;
  description: string;
  avatarUrl?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  description,
  avatarUrl,
}) => {
  return (
    <div className="flex items-center space-x-4 p-4 border rounded-md bg-white shadow">
      {avatarUrl && (
        <img
          src={avatarUrl}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
      )}
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>
    </div>
  );
};
