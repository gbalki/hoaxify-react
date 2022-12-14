import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translations: {
                'Sign Up' : 'Sing Up',
                'Password MisMatch' : 'Password MisMatch',
                'User Name' : 'User Name',
                'Display Name' : 'Display Name',
                'Password' : 'Password',
                'Password Repeat' : 'Password Repeat',
                Login: 'Login',
                Logout: 'Logout',
                Users: 'Users',
                Next: 'Next >',
                Previous: '< Previous',
                'Load Failure' : 'Load Failure',
                'User not found' : 'User not found',
                Edit: 'Edit',
                'Change Display Name' : 'Change Display Name',
                Save: 'Save',
                Cancel: 'Cancel'
            }
        },
        tr: {
            translations: {
                'Sign Up' : 'Kayıt Ol',
                'Password MisMatch' : 'Şifre Eşleşmedi',
                'User Name' : 'Kullanıcı Adı',
                'Display Name' : 'Tercih Edilen İsim',
                'Password' : 'Şifre',
                'Password Repeat' : 'Şifreyi Tekrarla',
                Login: 'Giriş Yap',
                Logout: 'Çıkış Yap',
                Users: 'Kullanıcılar',
                Next: 'Sonraki >',
                Previous: '< Önceki',
                'Load Failure' : 'Liste Alınamadı',
                'User not found' : 'Kullanıcı Bulunamadı',
                Edit: 'Düzenle',
                'Change Display Name' : 'Görünür İsminizi Değiştirin',
                Save: 'Kaydet',
                Cancel: 'İptal Et'
            }
        }
    },
    fallbackLng: 'en',
    ns: ['translations'],
    defaultNs: 'translations',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ','
    },
    react: {
        wait: true
    }

});

export default i18n;