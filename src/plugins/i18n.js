import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    nav: {
      home: 'Home',
      resume: 'Resume',
      portfolio: 'Portfolio',
      blog: 'Blog',
      services: 'Services',
      contact: 'Contact'
    },
    services: {
      my: 'My',
      services: 'Services',
      clients: 'Clients'
    },
    blog: {
      backToBlog: 'Back to Blog'
    },
    home: {
      greeting: 'Hello, I am',
      name: 'Himal Gurung',
      title: 'Frontend Developer & Software Engineer',
      description: 'Hello! I\'m Himal Gurung. I\'m a front-end developer who is passionate about VUE, building great user experiences, fighting for simplicity over complexity and constantly learning. When I\'m not coding, you\'ll find me watching football or thinking about fantasy premier league.',
      downloadCV: 'Download CV',
      contactMe: 'Contact Me',
      aboutMe: 'More About Me',
      mySkills: 'My Skills',
      experience: 'Experience',
      projects: 'Projects',
      connectWithMe: 'Connect With Me'
    },
    resume: {
      title: 'Resume',
      education: 'Education',
      experience: 'Experience',
      technicalSkills: 'Technical Skills',
      languageSkills: 'Language Skills',
      languageCertifications: 'Language Certifications',
      downloadResume: 'Download Resume',
      frontendTechnologies: 'Frontend Technologies',
      mobileTesting: 'Mobile & Testing',
      aiDevTools: 'AI & Dev Tools',
      yearsExperience: '8+ Years Of Experience',
      location: 'Tokyo, Japan',
      expert: 'Vue.js Expert',
      bachelor: 'Bachelor In Computer Engineering',
      highSchool: 'High School',
      secondarySchool: 'Secondary School Level',
      frontendDeveloper: 'Frontend Developer/ Software Engineer',
      softwareEngineer: 'Software Engineer/ Web Developer',
      dataInterpretator: 'Data Interpretator',
      androidDeveloper: 'Android Developer (Trainee)',
      englishProficiency: 'English Proficiency',
      japaneseProficiency: 'Japanese Proficiency'
    },
    contact: {
      title: 'Contact',
      getInTouch: 'Get In Touch',
      description: 'Feel free to reach out to me for any inquiries or collaboration opportunities.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      nameRequired: 'Name is required',
      emailRequired: 'Email is required',
      emailValid: 'Email must be valid',
      messageRequired: 'Message is required',
      messageSent: 'Message sent successfully!',
      messageError: 'Error sending message. Please try again.'
    },
    footer: {
      tagline: 'Frontend Developer & Software Engineer',
      craftedWith: 'Crafted with',
      using: 'using',
      allRightsReserved: 'All rights reserved',
      location: 'Tokyo, Japan'
    }
  },
  ja: {
    nav: {
      home: 'ホーム',
      resume: '履歴書',
      portfolio: 'ポートフォリオ',
      blog: 'ブログ',
      services: 'サービス',
      contact: 'お問い合わせ'
    },
    services: {
      my: '私の',
      services: 'サービス',
      clients: 'クライアント'
    },
    blog: {
      backToBlog: 'ブログに戻る'
    },
    home: {
      greeting: 'こんにちは、私は',
      name: 'ヒマル・グルン',
      title: 'フロントエンド開発者・ソフトウェアエンジニア',
      description: 'こんにちは！私はヒマル・グルンです。VUEに情熱を注ぎ、優れたユーザーエクスペリエンスの構築、複雑さよりもシンプルさを追求し、常に学び続けるフロントエンド開発者です。コーディングをしていない時は、サッカーを見たり、ファンタジープレミアリーグについて考えたりしています。',
      downloadCV: '履歴書ダウンロード',
      contactMe: 'お問い合わせ',
      aboutMe: '私についてもっと詳しく',
      mySkills: 'スキル',
      experience: '経験',
      projects: 'プロジェクト',
      connectWithMe: '私とつながる'
    },
    resume: {
      title: '履歴書',
      education: '学歴',
      experience: '職歴',
      technicalSkills: '技術スキル',
      languageSkills: '言語スキル',
      languageCertifications: '言語資格',
      downloadResume: '履歴書ダウンロード',
      frontendTechnologies: 'フロントエンド技術',
      mobileTesting: 'モバイル・テスト',
      aiDevTools: 'AI・開発ツール',
      yearsExperience: '8年以上の経験',
      location: '東京、日本',
      expert: 'Vue.js エキスパート',
      bachelor: 'コンピュータ工学学士',
      highSchool: '高等学校',
      secondarySchool: '中等教育レベル',
      frontendDeveloper: 'フロントエンド開発者・ソフトウェアエンジニア',
      softwareEngineer: 'ソフトウェアエンジニア・ウェブ開発者',
      dataInterpretator: 'データ解析者',
      androidDeveloper: 'Android開発者（研修生）',
      englishProficiency: '英語能力',
      japaneseProficiency: '日本語能力'
    },
    contact: {
      title: 'お問い合わせ',
      getInTouch: 'お気軽にご連絡ください',
      description: 'お問い合わせやコラボレーションの機会について、お気軽にご連絡ください。',
      name: '名前',
      email: 'メールアドレス',
      message: 'メッセージ',
      send: 'メッセージを送信',
      nameRequired: '名前は必須です',
      emailRequired: 'メールアドレスは必須です',
      emailValid: '有効なメールアドレスを入力してください',
      messageRequired: 'メッセージは必須です',
      messageSent: 'メッセージが正常に送信されました！',
      messageError: 'メッセージの送信中にエラーが発生しました。もう一度お試しください。'
    },
    footer: {
      tagline: 'フロントエンド開発者・ソフトウェアエンジニア',
      craftedWith: '❤️で作成',
      using: 'を使用',
      allRightsReserved: '全著作権所有',
      location: '東京、日本'
    }
  }
}

const i18n = new VueI18n({
  locale: 'en', // default locale
  fallbackLocale: 'en',
  messages
})

export default i18n