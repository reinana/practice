'use strict';
{
    const btn = document.getElementById('btn');
    btn.addEventListener("click", () => {
        // const result = ['大吉' , '中吉', '凶', '末吉']
        // const result = ['大吉' , '大吉', '大吉', '末吉'] //確率を操作するには配列に偏りを持たせる
        // const n = Math.floor(Math.random() * result.length); //ランダム公式覚える
        // btn.textContent = result[n];
        // btn.textContent = result[Math.floor(Math.random() * result.length)];
        const n = Math.random();
        if(n < 0.05){
            btn.textContent = '大吉';
        }else if( n < 0.2){
            btn.textContent = '中吉';
        }else{
            btn.textContent = '凶';
        }
        // switch (n){
        //     case 0:
        //         btn.textContent = "大吉";
        //         break;
        //     case 1:
        //         btn.textContent = "中吉";
        //         break;
        //     case 2:
        //         btn.textContent = "凶";
        //         break;

        // }
    });
}