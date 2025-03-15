// components/StoryCard.js
export default function StoryCard({ title, content }) {
    return (
      <div className="bg-gray-700 rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <h3 className="text-xl font-semibold text-gray-100 mb-3">{title}</h3>
        <p className="text-gray-300">{content}</p>
      </div>
    );
  }