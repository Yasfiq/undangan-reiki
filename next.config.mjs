/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  env: {
    FIREBASE_API_KEY: 'AIzaSyDkKFLH1ToKqeC8HUZyLgcUaycVijJWDe8',
    FIREBASE_AUTH_DOMAIN: 'wedding-invitation-728ff.firebaseapp.com',
    FIREBASE_PROJECT_ID: 'wedding-invitation-728ff',
    FIREBASE_STORAGE_BUCKET: 'wedding-invitation-728ff.appspot.com',
    FIREBASE_MESSAGING_SENDER_ID: '555334899136',
    FIREBASE_APP_ID: '1:555334899136:web:214f696b715cdd34e3e425',
    FIREBASE_MEASUREMENT_ID: 'G-REHGNE26C8',
    WELCOME_MESSAGE: 'We Are Getting Married',
    COUPLE_NAME: 'Muhammad Maulana Firdaus & Suci Maulida',
    WITH_COUPLE_PICTURE: 'on',
    MAN_NAME: 'Muhammad Maulana Firdaus',
    WOMAN_NAME: 'Suci Maulida',
    MAN_PARENT_NAME: 'Bpk. Iwan Setiawan & Ibu Atikah',
    WOMAN_PARENT_NAME: 'Bpk.Ujang Supiana & Ibu Nenah',
    MAN_INSTAGRAM: '_reyyy05',
    WOMAN_INSTAGRAM: 'irmaqwe0_',
    COUTING_DATE: '2025-04-22T08:00:00',
    LOCATION_FOR_CALENDAR: 'Kota Bogor, Indonesia',
    START_DATE_FOR_CALENDAR: '2025-04-22T08:00:00',
    END_DATE_FOR_CALENDAR: '2025-04-22T18:00:00',
    AKAD_DATE: 'Tuesday, April 22, 2025 at 8:00 AM',
    AKAD_ADDRESS: 'Kediaman Mempelai Wanita',
    AKAD_MAPS_ADDRESS: '8QV3+3J3 Tamansari, Kabupaten Bogor, Jawa Barat',
    RECEPTION_DATE: 'Tuesday, April 22, 2025 at 9:00 AM',
    RECEPTION_ADDRESS:
      'Kp.Taman Sari RT.03 RW.05 Desa Taman Sari Kec. Taman Sari',
    RECEPTION_MAPS_ADDRESS: '8QV3+3J3 Tamansari, Kabupaten Bogor, Jawa Barat',
    WITH_GALLERY: 'off',
    BANK_ACCOUNT_MAN: '7361250536',
    BANK_NAME: 'BCA',
    BANK_ACCOUNT_WOMAN: '7361250536',
    BANK_NAME: 'BCA',
    WHATSAPP_CONFIRMATION: '6283869702998',
    PROJECT_NAME: 'UNDANGAN_IBAY',
  },
};

export default nextConfig;
