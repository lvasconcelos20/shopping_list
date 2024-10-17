import React from "react";

interface TagProps {
    label: string; 
    icon: React.ReactNode;
    color: string;
}

const Tag: React.FC<TagProps> = ({label, icon, color}) => {
    return (
    <div className={`flex items-center gap-2 px-2 py-1 rounded-full ${color}`}>
      <span className="text-lg">{icon}</span>
      <span className="text-sm text-white">{label}</span>
    </div>
    )
}

export default Tag;