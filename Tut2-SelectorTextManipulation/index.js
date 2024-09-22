$("#my-heading").text("This is heading from JQuery");
let para = $(".para");
para.html("<b>This is Paragraph 1 from JQuery</b>");

para.append(" ... append from tripple dot by JQuery");
para.prepend("Prepend upto tripple dot by JQuery ... ");

let newPara = $("<p></P>").text(
  "This para is added after of #para from JQuery"
);
let newPara1 = $("<p></P>").text(
  "This para is added before of #para from JQuery"
);
para.after(newPara);
para.before(newPara1);
