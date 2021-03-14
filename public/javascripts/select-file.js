$(document).ready(() => {
  const osPathSeparator = navigator.appVersion.indexOf('Win') != -1 ? '\\' : '/';
  let currentPath = null;
  const options = {
    paging: false,
    autoWidth: false,
    scrollY: '250px',
    scrollCollapse: true,
    createdRow: onRowCreated,
    columns: [{ data: null, render: createRow }],
  };

  const table = $('#fileTable').DataTable(options);

  function onRowCreated(row, data) {
    if (!data.isDirectory) return;
    const { path } = data;
    $(row).bind('click', (event) => {
      $.get(`/files?path=${path}`).then((data) => {
        table.clear();
        table.rows.add(data).draw();
        currentPath = path;
      });
      event.preventDefault();
    });
  }

  function createRow(data) {
    if (data.isDirectory) {
      return (
        `${"<a href='#' target='_blank'>"
        + "<span class='fa fa-folder'></span>&nbsp;"}${
          data.name
        }</a>`
      );
    }
    return (
      `<a href='/?logFile=${
        data.currentDir
      }${osPathSeparator
      }${data.path.substr(
        data.path.lastIndexOf(osPathSeparator) + 1,
        data.path.length,
      )
      }' target='_blank'><span class='fa fa-file-o'></span>&nbsp;${
        data.name
      }</a>`
    );
  }

  $.get('/files').then((data) => {
    table.clear();
    table.rows.add(data).draw();
  });

  $('#back').bind('click', () => {
    if (!currentPath) return;
    const idx = currentPath.lastIndexOf('/');
    const path = currentPath.substr(0, idx);
    $.get(`/files?path=${path}`).then((data) => {
      table.clear();
      table.rows.add(data).draw();
      currentPath = path;
    });
  });
});
