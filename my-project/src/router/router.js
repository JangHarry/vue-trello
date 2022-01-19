import Router from 'vue-router';
import Vue from 'vue';
import NotFound from '../components/NotFound';
import Board from '../components/Board';
import Card from '../components/Card';


Vue.use(Router);

export default new Router({
    mode:"history", 
    routes: [
         
        {
            path: "/",
            name: "Board",
            component: Board,
            children: [
                {path: 'c/:cid' , component : Card}
            ]
        },        
        {
            path: '*',
            component: NotFound
        }
]
});