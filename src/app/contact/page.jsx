import react from "react";

export default function page() {

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold mb-10 text-left">Contact</h1>

      <form
        className="w-full max-w-2xl flex flex-col space-y-6"
      >
        {/* Name and Email */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-6 sm:space-y-0">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="flex-1 border border-black px-3 py-3 text-sm tracking-wide"
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            className="flex-1 border border-black px-3 py-3 text-sm tracking-wide"
          />
        </div>

        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="Phone number"
          className="border border-black px-3 py-3 text-sm tracking-wide"
        />

        {/* Comment */}
        <textarea
          name="comment"
          placeholder="Comment"
          rows={4}
          className="border border-black px-3 py-3 text-sm tracking-wide"
        />

        {/* Send Button */}
        <button
          type="submit"
          className="bg-black text-white font-semibold px-6 py-2 w-24 hover:scale-110"
        >
          Send
        </button>
      </form>
    </div>
  );
}

