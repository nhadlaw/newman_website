// pages/index.js
"use client"
import ChitChatsCard from './ChitChatsCard';

export default function CampusMinistryDisplay({chitChatTopics}) {

  return (
    <div>
        <div 
          className="flex flex-wrap justify-center gap-6 p-4 mt-8 mb-24"
        >
            {chitChatTopics.map(function (chitChat, index) {
                return (
                  <div 
                    key={index}
                    className={`cursor-pointer`}
                  >
                    <ChitChatsCard key={index} chitChat={chitChat} />
                  </div>
                )
            })}
        </div>
    </div>
  );
}