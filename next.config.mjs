/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  env: {
    NEXT_PUBLIC_FIREBASE_API_KEY: "AIzaSyDkKFLH1ToKqeC8HUZyLgcUaycVijJWDe8",
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN:
      "wedding-invitation-728ff.firebaseapp.com",
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: "wedding-invitation-728ff",
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: "wedding-invitation-728ff.appspot.com",
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: "555334899136",
    NEXT_PUBLIC_FIREBASE_APP_ID: "1:555334899136:web:214f696b715cdd34e3e425",
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: "G-REHGNE26C8",
  },
};

export default nextConfig;
