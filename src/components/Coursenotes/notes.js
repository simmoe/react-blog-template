//Firestore rules for database and Storage

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow create, update, delete: if request.auth.token.email.matches("simmoe@gmail.com");
    }
	}
}
