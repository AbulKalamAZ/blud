import Image from "next/image";

const Signup = () => {
  return (
    <div className="bg-black text-white py-10 text-center md:py-40 relative overflow-hidden">
      {/* Fire Images */}
      <Image
        width="1000"
        height="1000"
        quality={100}
        src="/flame1.png"
        alt="Flame"
        className="w-full  rotate-90 absolute top-0 bottom-0 h-auto -left-[36vw] opacity-20"
      />

      <Image
        width="1000"
        height="1000"
        quality={100}
        src="/flame2.png"
        alt="Flame"
        className="w-full  -rotate-90 absolute top-0 bottom-0 h-auto -right-[36vw] opacity-20"
      />

      <div className="absolute invert inset-0 bg-dottedTexture1 z-10 bg-contain opacity-20 pointer-events-none" />
      <div className="container relative z-20">
        <h2 className="text-xl md:text-4xl font-ExtraBoldCond mb-4">Sign Up</h2>
        <p className="text-md md:text-xl font-Med w-[700px] max-w-full mx-auto normal-case leading-tight mb-2">
          Be the First to Know – Bludfest 2025 Awaits!
        </p>
        <p className="text-md md:text-md w-[700px] max-w-full mx-auto normal-case mb-2">
          Don't miss out on updates, early bird offers, and exclusive access to
          Bludfest 2025. Sign up now and stay in the loop for lineup
          announcements, ticket details, and more."
        </p>
        <iframe
          width="500"
          height="auto"
          src="https://yungblud.os.fan/bludfest-2025-site-register"
          title="Openstage Fan Signup"
          className="lg:max-w-[600px] m-auto rounded-lg lg:max-h-auto  min-h-[300px] lg:h-auto  uppercase mt-8 relative z-10 max-w-[80vw] "
          allow="geolocation; microphone; camera; fullscreen; payment"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        ></iframe>
      </div>
    </div>
  );
};

export default Signup;
