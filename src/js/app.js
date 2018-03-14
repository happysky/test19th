import css from '../css/index.css'
import $ from 'zepto'

const app = {
    init: ()=>{
        app.bindEvent();
    },
    bindEvent: ()=>{
        let index_button = $('.index-button')
        let index_input = $('.index-input')

        index_button.on('click', ()=>{
            let user_name = $.trim(index_input.val())

            if(!user_name){
                alert('请输入用户名!');
                index_input.focus();
                return false;
            }
        });
    }
}

app.init();