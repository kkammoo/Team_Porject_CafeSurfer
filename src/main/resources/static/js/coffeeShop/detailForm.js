'use strict';

//textArea => ck_editor 대체
ClassicEditor
      .create( document.querySelector( '#bcontent' ), {
       plugin:['ListStyle','Markdown','MediaEmbed','MediaEmbedToolbar'],
         toolbar: {
            items: [
               'heading',
               '|',
               'underline',
               'bold',
               'italic',
               'link',
               'bulletedList',
               'numberedList',
               'todoList',
               '|',
               'outdent',
               'indent',
               '|',
               'imageInsert',
               'imageUpload',
               'blockQuote',
               'insertTable',
               'mediaEmbed',
               'markdown',
               'undo',
               'redo',
               '|',
               'highlight',
               'fontFamily',
               'fontColor',
               'fontBackgroundColor',
               'fontSize',
               '|',
               'htmlEmbed',
               'specialCharacters'
            ]
         },
         language: 'en',
         image: {
            toolbar: [
               'imageTextAlternative',
               'imageStyle:full',
               'imageStyle:side'
            ]
         },
         table: {
            contentToolbar: [
               'tableColumn',
               'tableRow',
               'mergeTableCells',
               'tableCellProperties',
               'tableProperties'
            ]
         },
      })
      .then( editor => {

         window.editor = editor;
         editor.isReadOnly = true;
      } )
      .catch( error => {
         console.error( error );
      } );





  //답글
  const $replyBtn = document.getElementById('replyBtn');
  $replyBtn?.addEventListener('click',e=>{
    const url = `/coffeeShop/${shopId.value}/reply`;
    location.href= url;
  });
  //수정
  const $editBtn = document.getElementById('editBtn');
  $editBtn?.addEventListener('click',e=>{
    const url = `/coffeeShop/${shopId.value}/edit`;
    location.href= url;
  });
  //삭제
    const $delBtn = document.getElementById('delBtn');
 $delBtn?.addEventListener('click',e=>{
    if(confirm('삭제하시겠습니까?')){
    const url = `/coffeeShop/${shopId.value}/del`;
    location.href= url;
    }
  });
  //목록
  const $listBtn = document.getElementById('listBtn');
  $listBtn?.addEventListener('click',e=>{
      const url = `/coffeeShop`;
      console.log('url='+url);
      location.href=url;
  });
