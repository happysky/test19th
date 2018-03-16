import css from '../css/result.css'
import $ from 'zepto'

const result = {
    init: ()=>{
        result.getData();
    },
    getData: ()=>{
        let container = $('.container .list');
        $.ajax({
            url: '/app/list.php',
            type: 'GET',
            dataType: 'json',
            success: (data = {})=>{
                let state = data.state
                let htmls = [];
                if(state != 1){
                    alert('请求出错，请刷新页面');
                    return false;
                }

                htmls.push('<ul>');
                data.list.forEach((item, index)=>{
                    htmls.push(`<li>`)
                    htmls.push(`    <em>${index+1}</em>`)
                    htmls.push(`    <p>姓名：${item.name}</p>`)
                    htmls.push(`    <p>分数：${item.score}</p>`)
                    htmls.push(`    <p>时间：${item.time}</p>`)
                    htmls.push(`</li>`)
                })

                if(data.list.length == 0){
                    htmls.push('<p style="text-align: center;margin: 100px;">还没有人参与</p>')
                }
                htmls.push('</ul>');

                container.html(htmls.join(''))
            },
            error: ()=>{
                alert('请求出错，请刷新页面')
            }

        })
    }
}

result.init();