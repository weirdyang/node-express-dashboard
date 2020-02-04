$(document).ready(function(){
  
  var currentPath = null;
  var options = {
    "paging": false,
    "autoWidth": false,
    "scrollY": "250px",
    "scrollCollapse": true,
    "createdRow" : onRowCreated, 
    "columns": [
      { "data": null,
        "render": createRow
      }
    ]
  };

  var table = $("#fileTable").DataTable(options);

  function onRowCreated(row, data, dataIndex) {
    if (!data.isDirectory) return;
    var path = data.path;
    $(row).bind("click", function(event){
       $.get('/files?path='+ path).then(function(data){
        table.clear();
        table.rows.add(data).draw();
        currentPath = path;
      });
      event.preventDefault();
    });
  }

  function createRow(data, type, row, meta) {
    if (data.isDirectory) {
      return "<a href='#' target='_blank'>" +
             "<span class='fa fa-folder'></span>&nbsp;" +
             data.name +"</a>";
    } else {
      return "<a href='/?logFile=" + data.currentDir + "/" + data.path.substr(data.path.lastIndexOf("/") + 1, data.path.length) +
             "' target='_blank'><span class='fa fa-file-o'></span>&nbsp;" +
             data.name +"</a>";
    }
  }

  $.get('/files').then(function(data){
    table.clear();
    table.rows.add(data).draw();
  });

  $("#back").bind("click", function(e){
    if (!currentPath) return;
    var idx = currentPath.lastIndexOf("/");
    var path = currentPath.substr(0, idx);
    $.get('/files?path='+ path).then(function(data){
      table.clear();
      table.rows.add(data).draw();
      currentPath = path;
    });
  });
});
