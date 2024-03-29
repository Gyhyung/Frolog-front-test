export interface UserProfile {
  id: string;
  name: string;
  nickname: string;
  profilePicture: string;
}

export interface BookReviewData {
  id: string;
  user: UserProfile;
  bookImage: string;
  bookName: string;
  bookAuthor: string;
  oneLiner: string;
  review: string;
  rating: number;
  commentsCount: number;
}

export const reviews: BookReviewData[] = [
  {
    id: 'review1',
    user: {
      id: 'user1',
      name: '김혜나',
      nickname: '느긋한 돌맹이',
      profilePicture:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
    },
    bookImage:
      'https://s3-alpha-sig.figma.com/img/5a35/a9db/af7cfe65f7821bb9f110410244b082ef?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bTjTs0zvBgUFUObsadfZlOhNnIWNNMoPmuYF~7NyQSvvzzli52bFxozcb5japfemSzrTJX3iYOxtaP8BoiCftiRhB8luk17c9TBKpb8G9ERQudEpDA0goCJlwfeJJB~W8YSMqigp5z96kI9bqjkG7ldtODtaeWRQzwCt9e9juhOymLUQrC1lag8aA9pNk86e4cf7uxJ3Ki61NhtOrNKn9yckjt6I3tCLiKxEeC6argUXF-lmjDosuytMEEEU47q6~9ss7wsITA~u3YOF~GbKIvKB27jKO4-zUD8hL6m2wPRAr8wIcp07O0pzB7nh0nDIhNLGKh-TjReRI9HNhlhtWA__',
    bookName: '종강',
    bookAuthor: '교수님 종강좀..',
    oneLiner: '정말 인생작이네요!',
    review:
      '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    rating: 4.5,
    commentsCount: 3,
  },
  {
    id: 'review2',
    user: {
      id: 'user1',
      name: '김별나',
      nickname: '종강종강돌을던지자',
      profilePicture:
        'https://i.pinimg.com/564x/08/3d/a7/083da742e1c9e220603ba98e8a123ccf.jpg',
    },
    bookImage:
      'https://s3-alpha-sig.figma.com/img/5a35/a9db/af7cfe65f7821bb9f110410244b082ef?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bTjTs0zvBgUFUObsadfZlOhNnIWNNMoPmuYF~7NyQSvvzzli52bFxozcb5japfemSzrTJX3iYOxtaP8BoiCftiRhB8luk17c9TBKpb8G9ERQudEpDA0goCJlwfeJJB~W8YSMqigp5z96kI9bqjkG7ldtODtaeWRQzwCt9e9juhOymLUQrC1lag8aA9pNk86e4cf7uxJ3Ki61NhtOrNKn9yckjt6I3tCLiKxEeC6argUXF-lmjDosuytMEEEU47q6~9ss7wsITA~u3YOF~GbKIvKB27jKO4-zUD8hL6m2wPRAr8wIcp07O0pzB7nh0nDIhNLGKh-TjReRI9HNhlhtWA__',
    bookName: '종강을 주세요',
    bookAuthor: '아오..',
    oneLiner: '이 책은 인생을 알려주는 책이네요!',
    review:
      '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    rating: 5.0,
    commentsCount: 10,
  },
  {
    id: 'review3',
    user: {
      id: 'user1',
      name: '김달나',
      nickname: '감자탕속당근의 마음을',
      profilePicture:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
    },
    bookImage:
      'https://s3-alpha-sig.figma.com/img/5a35/a9db/af7cfe65f7821bb9f110410244b082ef?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bTjTs0zvBgUFUObsadfZlOhNnIWNNMoPmuYF~7NyQSvvzzli52bFxozcb5japfemSzrTJX3iYOxtaP8BoiCftiRhB8luk17c9TBKpb8G9ERQudEpDA0goCJlwfeJJB~W8YSMqigp5z96kI9bqjkG7ldtODtaeWRQzwCt9e9juhOymLUQrC1lag8aA9pNk86e4cf7uxJ3Ki61NhtOrNKn9yckjt6I3tCLiKxEeC6argUXF-lmjDosuytMEEEU47q6~9ss7wsITA~u3YOF~GbKIvKB27jKO4-zUD8hL6m2wPRAr8wIcp07O0pzB7nh0nDIhNLGKh-TjReRI9HNhlhtWA__',
    bookName: '종강이 필요한 김혜나',
    bookAuthor: '익명의 저자',
    oneLiner: '종강이 참으로 필요하답니다🥹!',
    review:
      '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    rating: 3.0,
    commentsCount: 12,
  },
  {
    id: 'review4',
    user: {
      id: 'user1',
      name: '봉구스',
      nickname: '냉장고속샤인머스켓의마음',
      profilePicture:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
    },
    bookImage:
      'https://s3-alpha-sig.figma.com/img/5a35/a9db/af7cfe65f7821bb9f110410244b082ef?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bTjTs0zvBgUFUObsadfZlOhNnIWNNMoPmuYF~7NyQSvvzzli52bFxozcb5japfemSzrTJX3iYOxtaP8BoiCftiRhB8luk17c9TBKpb8G9ERQudEpDA0goCJlwfeJJB~W8YSMqigp5z96kI9bqjkG7ldtODtaeWRQzwCt9e9juhOymLUQrC1lag8aA9pNk86e4cf7uxJ3Ki61NhtOrNKn9yckjt6I3tCLiKxEeC6argUXF-lmjDosuytMEEEU47q6~9ss7wsITA~u3YOF~GbKIvKB27jKO4-zUD8hL6m2wPRAr8wIcp07O0pzB7nh0nDIhNLGKh-TjReRI9HNhlhtWA__',
    bookName: '종강제바아알',
    bookAuthor: '뭐요!!!저자',
    oneLiner: '내가 가는 길이 곧 길!!',
    review:
      '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    rating: 4.5,
    commentsCount: 30,
  },
  {
    id: 'review5',
    user: {
      id: 'user1',
      name: '김혜나',
      nickname: '마루는강쥐',
      profilePicture:
        'https://i.pinimg.com/564x/f0/e0/9c/f0e09cba73d689fc2c0ef01bbbbeae1a.jpg',
    },
    bookImage:
      'https://s3-alpha-sig.figma.com/img/5a35/a9db/af7cfe65f7821bb9f110410244b082ef?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bTjTs0zvBgUFUObsadfZlOhNnIWNNMoPmuYF~7NyQSvvzzli52bFxozcb5japfemSzrTJX3iYOxtaP8BoiCftiRhB8luk17c9TBKpb8G9ERQudEpDA0goCJlwfeJJB~W8YSMqigp5z96kI9bqjkG7ldtODtaeWRQzwCt9e9juhOymLUQrC1lag8aA9pNk86e4cf7uxJ3Ki61NhtOrNKn9yckjt6I3tCLiKxEeC6argUXF-lmjDosuytMEEEU47q6~9ss7wsITA~u3YOF~GbKIvKB27jKO4-zUD8hL6m2wPRAr8wIcp07O0pzB7nh0nDIhNLGKh-TjReRI9HNhlhtWA__',
    bookName: '힘들 때는 힘을 내세요',
    bookAuthor: '호호호',
    oneLiner: '정말 인생작이네요!',
    review:
      '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    rating: 2.0,
    commentsCount: 3,
  },
  {
    id: 'review6',
    user: {
      id: 'user1',
      name: '김혜나',
      nickname: '메아리가 울리는 바다~',
      profilePicture:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
    },
    bookImage:
      'https://s3-alpha-sig.figma.com/img/5a35/a9db/af7cfe65f7821bb9f110410244b082ef?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bTjTs0zvBgUFUObsadfZlOhNnIWNNMoPmuYF~7NyQSvvzzli52bFxozcb5japfemSzrTJX3iYOxtaP8BoiCftiRhB8luk17c9TBKpb8G9ERQudEpDA0goCJlwfeJJB~W8YSMqigp5z96kI9bqjkG7ldtODtaeWRQzwCt9e9juhOymLUQrC1lag8aA9pNk86e4cf7uxJ3Ki61NhtOrNKn9yckjt6I3tCLiKxEeC6argUXF-lmjDosuytMEEEU47q6~9ss7wsITA~u3YOF~GbKIvKB27jKO4-zUD8hL6m2wPRAr8wIcp07O0pzB7nh0nDIhNLGKh-TjReRI9HNhlhtWA__',
    bookName: '어찌어찌 인생은 흘러간답니다',
    bookAuthor: '얌마',
    oneLiner: '무엇이든 해낼 수 있답니다!',
    review:
      '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    rating: 2.5,
    commentsCount: 3,
  },
  {
    id: 'review7',
    user: {
      id: 'user1',
      name: '김혜나',
      nickname: '메롱이다',
      profilePicture:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
    },
    bookImage:
      'https://s3-alpha-sig.figma.com/img/5a35/a9db/af7cfe65f7821bb9f110410244b082ef?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bTjTs0zvBgUFUObsadfZlOhNnIWNNMoPmuYF~7NyQSvvzzli52bFxozcb5japfemSzrTJX3iYOxtaP8BoiCftiRhB8luk17c9TBKpb8G9ERQudEpDA0goCJlwfeJJB~W8YSMqigp5z96kI9bqjkG7ldtODtaeWRQzwCt9e9juhOymLUQrC1lag8aA9pNk86e4cf7uxJ3Ki61NhtOrNKn9yckjt6I3tCLiKxEeC6argUXF-lmjDosuytMEEEU47q6~9ss7wsITA~u3YOF~GbKIvKB27jKO4-zUD8hL6m2wPRAr8wIcp07O0pzB7nh0nDIhNLGKh-TjReRI9HNhlhtWA__',
    bookName: '종강',
    bookAuthor: '호호호',
    oneLiner: '정말 인생작이네요!',
    review:
      '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    rating: 5.0,
    commentsCount: 3,
  },
  {
    id: 'review8',
    user: {
      id: 'user1',
      name: '김혜나',
      nickname: '메롱이다',
      profilePicture:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
    },
    bookImage:
      'https://s3-alpha-sig.figma.com/img/5a35/a9db/af7cfe65f7821bb9f110410244b082ef?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bTjTs0zvBgUFUObsadfZlOhNnIWNNMoPmuYF~7NyQSvvzzli52bFxozcb5japfemSzrTJX3iYOxtaP8BoiCftiRhB8luk17c9TBKpb8G9ERQudEpDA0goCJlwfeJJB~W8YSMqigp5z96kI9bqjkG7ldtODtaeWRQzwCt9e9juhOymLUQrC1lag8aA9pNk86e4cf7uxJ3Ki61NhtOrNKn9yckjt6I3tCLiKxEeC6argUXF-lmjDosuytMEEEU47q6~9ss7wsITA~u3YOF~GbKIvKB27jKO4-zUD8hL6m2wPRAr8wIcp07O0pzB7nh0nDIhNLGKh-TjReRI9HNhlhtWA__',
    bookName: '종강',
    bookAuthor: '호호호',
    oneLiner: '정말 인생작이네요!',
    review:
      '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    rating: 5.0,
    commentsCount: 3,
  },
  {
    id: 'review9',
    user: {
      id: 'user1',
      name: '김혜나',
      nickname: '메롱이다',
      profilePicture:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
    },
    bookImage:
      'https://s3-alpha-sig.figma.com/img/5a35/a9db/af7cfe65f7821bb9f110410244b082ef?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bTjTs0zvBgUFUObsadfZlOhNnIWNNMoPmuYF~7NyQSvvzzli52bFxozcb5japfemSzrTJX3iYOxtaP8BoiCftiRhB8luk17c9TBKpb8G9ERQudEpDA0goCJlwfeJJB~W8YSMqigp5z96kI9bqjkG7ldtODtaeWRQzwCt9e9juhOymLUQrC1lag8aA9pNk86e4cf7uxJ3Ki61NhtOrNKn9yckjt6I3tCLiKxEeC6argUXF-lmjDosuytMEEEU47q6~9ss7wsITA~u3YOF~GbKIvKB27jKO4-zUD8hL6m2wPRAr8wIcp07O0pzB7nh0nDIhNLGKh-TjReRI9HNhlhtWA__',
    bookName: '종강',
    bookAuthor: '호호호',
    oneLiner: '정말 인생작이네요!',
    review:
      '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    rating: 5.0,
    commentsCount: 8,
  },
  {
    id: 'review10',
    user: {
      id: 'user1',
      name: '김혜나',
      nickname: '메롱이다',
      profilePicture:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
    },
    bookImage:
      'https://s3-alpha-sig.figma.com/img/5a35/a9db/af7cfe65f7821bb9f110410244b082ef?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bTjTs0zvBgUFUObsadfZlOhNnIWNNMoPmuYF~7NyQSvvzzli52bFxozcb5japfemSzrTJX3iYOxtaP8BoiCftiRhB8luk17c9TBKpb8G9ERQudEpDA0goCJlwfeJJB~W8YSMqigp5z96kI9bqjkG7ldtODtaeWRQzwCt9e9juhOymLUQrC1lag8aA9pNk86e4cf7uxJ3Ki61NhtOrNKn9yckjt6I3tCLiKxEeC6argUXF-lmjDosuytMEEEU47q6~9ss7wsITA~u3YOF~GbKIvKB27jKO4-zUD8hL6m2wPRAr8wIcp07O0pzB7nh0nDIhNLGKh-TjReRI9HNhlhtWA__',
    bookName: '종강',
    bookAuthor: '호호호',
    oneLiner: '정말 인생작이네요!',
    review:
      '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    rating: 5.0,
    commentsCount: 15,
  },
];
