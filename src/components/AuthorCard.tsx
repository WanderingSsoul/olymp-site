"use client";

type AuthorProps = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export default function AuthorCard({ name, role, bio, image }: AuthorProps) {
  return (
    <div className="bg-white/60 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-lg flex flex-col items-center justify-center text-center transition-transform duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover rounded-xl mb-6 shadow-md"
      />
      <h2 className="text-2xl font-bold text-gray-900 mb-1">{name}</h2>
      <h3 className="text-sm sm:text-base text-indigo-600 font-medium mb-3">{role}</h3>
      <p className="text-gray-700 text-base leading-relaxed">{bio}</p>
    </div>
  );
}
