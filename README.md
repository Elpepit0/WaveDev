# 🌊 WaveDevv

Bienvenue sur **WaveDevv**, un site vitrine moderne conçu pour présenter des services numériques et faciliter la prise de contact avec les clients. Développé avec React et Tailwind CSS, il offre une interface fluide et responsive.

## 🚀 Aperçu

🔗 [Accéder au site](https://wavedevv.netlify.app/)

## ✨ Fonctionnalités

- 🎨 Design responsive et moderne  
- 📬 Formulaire de contact fonctionnel avec validation  
- ⚡ Déploiement rapide via Netlify  
- 📱 Compatibilité mobile optimisée  
- 🧩 Utilisation de composants modulaires  

## 🛠️ Technologies utilisées

- **React** – pour la construction de l'interface utilisateur  
- **Tailwind CSS** – pour un style rapide et cohérent  
- **EmailJS** – pour l'envoi des messages du formulaire de contact  
- **Lucide Icons** – pour des icônes SVG élégantes  
- **Netlify** – pour l'hébergement et le déploiement continu  

## 📦 Installation locale

```bash
git clone https://github.com/Elpepit0/wavedevv.git
cd wavedevv
npm install
npm run dev
```
## 📧 Configuration d'EmailJS

1. Crée un compte sur [EmailJS](https://www.emailjs.com/)  
2. Ajoute un service et un template email  
3. Remplace les identifiants dans le code :

```tsx
emailjs.send(
  'ton_service_id',
  'ton_template_id',
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  },
  'ta_public_key'
);
```

## 📄 Licence

Ce projet est sous licence MIT.
