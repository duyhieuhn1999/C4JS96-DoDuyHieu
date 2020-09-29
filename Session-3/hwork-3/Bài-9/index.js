let colorList =['gary','blue','purple','cyan'];
for(let i=0; i <colorList.length;i++){
    color(colorList[i]);
    for(let a =0;a<4;a++){
        fd(25 * (i +1));
        rt(90);
    }
}