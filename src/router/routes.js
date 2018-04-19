import WriteStory from 'pages/WriteStory';
import Stories from 'pages/Stories';

export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') },
      
      { path: 'stories', component: Stories },
      { path: 'histoires', component: Stories },

      { path: 'write-story', component: WriteStory },
      { path: 'ecrire-histoire', component: WriteStory },
    ],
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404'),
  },
];
