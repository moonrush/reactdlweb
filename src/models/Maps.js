import Intro from '../components/Intro'

import Game from '../components/Game'
import Sudoku from '../components/Game/Sudoku'
import ClickReact from '../components/Game/ClickReact'
import Tetris from '../components/Game/Tetris'

import Essay from '../components/Essay'
import Essay_Movie from '../components/Essay/Movie'
import Essay_Book from '../components/Essay/Book'

import Chatroom from '../components/Chatroom'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'

const Maps={
    SiteMap:[
        {
            route:'/',
            component:Intro
        },
        {
            route:'/game',
            component:Game
        },
        {
            route:'/game/sudoku',
            component:Sudoku
        },
        {
            route:'/game/clickreact',
            component:ClickReact
        },
        {
            route:'/game/tetris',
            component:Tetris
        },
        {
            route:'/essay',
            component:Essay
        },
        {
            route:'/essay/movie',
            component:Essay_Movie
        },
        {
            route:'/essay/book',
            component:Essay_Book
        },
        {
            route:'/chatroom',
            component:Chatroom
        },
        {
            route:'/contact',
            component:Contact
        },
        {
            route:'/aboutme',
            component:AboutMe
        },
    ],
    SiderMap:[
        {
            id:'1',
            name:'Intro',
            route:'/',
        },
        {
            id:'2',
            name:'Game',
            route:'/game',
            routes:[
                {
                    id:'2-1',
                    name:'Sudoku',
                    route:'/game/sudoku',
                },
                {
                    id:'2-2',
                    name:'Tetris',
                    route:'/game/tetris',
                }
            ]
        },
        {
            id:'3',
            name:'Essay',
            route:'/essay',
            routes:[
                {
                    id:'3-1',
                    name:'Movie',
                    route:'/essay/movie',
                },
                {
                    id:'3-2',
                    name:'Book',
                    route:'/essay/book',
                }
            ]
        },
        {
            id:'4',
            name:'Chatroom',
            route:'/chatroom',
        },
        {
            id:'5',
            name:'AboutMe',
            route:'/aboutme',
        },
        {
            id: '6',
            name:'Contact',
            route:'/contact',
        },
    ]
}

export default Maps;