function UpdateAreaData(id, value, parentEle) {
  UpdateAreaData.superClass.constructor.call(this, id, value, parentEle)
}
extend(UpdateAreaData, UpdateData)
UpdateAreaData.prototype.initElements = function() {
  this.txtEle = $("<span/>")
  this.txtEle.text(this.value)

  this.textEle = $("<textarea style='width:315px;height:70px;'/>")
  this.textEle.val(this.value)

  this.btnDiv = $("<div style='display:block;'/>")
  this.saveBtn = $("<input type='button' value='保存'/>")
  this.cancelBtn = $("<input type='button' value='取消'/>")
  this.btnDiv.append(this.saveBtn).append(this.cancelBtn)

  this.parentEle.append(this.txtEle).append(this.textEle).append(this.btnDiv)

  this.convertToReadable()
}

function extend(subClass, superClass) {
  var F = function() {}
  F.prototype = superClass.prototype
    // 子类的prototype指向F的_proto_,_proto_又指向父类的prototype
  subClass.prototype = new F()
    // 在子类上存储一个指向弗雷德prototype的属性，便于子类的构造方法中与父类的名称解耦 使用
    // subClass.superClass.constructor.call 代替superClass.call  
  subClass.superClass = superClass.prototype
}
