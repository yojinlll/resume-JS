!function (){
    var view = document.querySelector('#topNavBar')
    view.style.border = '1px solid red;'

    var controller = function(view){
            //动画：导航栏滚动效果
            window.addEventListener('scroll', function(x){
                if(window.scrollY > 0){                      //只要大于零，便增加sticky，否则移除
                    view.classList.add('sticky')
                }else{
                    view.classList.remove('sticky')
                }
            })
    }
    
    controller(view)

}.call()
