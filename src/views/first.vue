<template>
  <div class="first">
      <div class="header">
          <p><</p>
          <h4>加多网</h4>
      </div>
      <div class="center">
          <div class="ctop">
              <li><input type="text" placeholder="热门搜索热门搜索"></li>
              <p>分类</p>
          </div>
          <div class="swipe">

          </div>
          <div class="list">
              <li v-for="(item,index) in list" :key="index">
                  {{item.tit}}
              </li>
          </div>
          <h3>金牌商家</h3>
          <div class="bom">
            <li></li>
            <li></li>
            <li></li>
          </div>
      </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            list:[
                {
                    tit:"成单奖励"
                },
                {
                    tit:"成单奖励"
                },
                {
                    tit:"成单奖励"
                },
                {
                    tit:"成单奖励"
                },
                {
                    tit:"成单奖励"
                },
                {
                    tit:"成单奖励"
                },
                {
                    tit:"成单奖励"
                },
                {
                    tit:"成单奖励"
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .first{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .header{
            width: 100%;
            height: 40px;
            line-height: 40px;
            display: flex;
            background: rgba(1, 21, 37, 0.863);
            color: #fff;
            p{
                flex: 1;
                text-align: center;
                font-size: 16px;
            }
            h4{
                flex: 9;
                text-align: center;
            }
        }
        .center{
            flex: 1;
            color: #fff;
            background: rgba(1, 21, 37, 0.863);
            .ctop{
                width: 100%;
                height: 40px;
                line-height: 40px;
                display: flex;
                background:rgb(66, 202, 66);
                color: #fff;
                p{
                    flex: 1;
                    text-align: center;
                    font-size: 16px;
                }
                li{
                    flex: 9;
                    text-align: center;
                }
            }
            .swipe{
                width: 80%;
                height: 130px;
                margin: 5px auto;
                border-radius: 10px;
                background: #f00;
            }
            .list{
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                text-align: center;
                border-bottom: 1px solid #ccc;
                li{
                    width: 20%;
                    margin: 9px;
                }
            }
            .bom{
                width: 100%;
                height: 100px;
                overflow: auto;
                display: flex;
                margin-top: 10px;
                li{
                    width: 80%;
                    height: 100px;
                    margin: 0 5px;
                    border: 5px;
                    background: #afc;
                }
            }
        }
         
    }
</style>
