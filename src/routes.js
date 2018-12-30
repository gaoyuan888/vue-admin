import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'
import axios from "axios/index";


let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '互医问诊',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            {path: '/table', component: Table, name: '患者列表'},
            {path: '/form', component: Form, name: '问诊信息'},
            {path: '/user', component: user, name: '医生列表'},
        ],
        hidden: false,
    },
    {
        path: '/',
        component: Home,
        name: '挂号平台',
        iconCls: 'fa fa-id-card-o',
        children: [
            {path: '/page4', component: Page4, name: '页面4'},
            {path: '/page5', component: Page5, name: '页面5'}
        ],
        hidden: true,
    },
    {
        path: '/',
        component: Home,
        name: '健康城市',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            {path: '/page6', component: Page6, name: '健康城市'}
        ],
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '购药业务',
        iconCls: 'fa fa-bar-chart',
        children: [
            {path: '/echarts', component: echarts, name: '购药业务'}
        ],
        hidden: true,
    },{
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    // 所有地址都没有匹配上，就走這個默认的路径
    {
        path: '*',
        hidden: true,
        redirect: {path: '/404'}
    }
];

export const showRoutes = params => {
    var res = [];
    for (var item in routes) {
        // console.info(routes[item].name);
        if (params == routes[item].name) {
            res.push(routes[item]);
        }
    }
    return res
};

export default routes;