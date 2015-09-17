$(function() {
  var baseurl= 'http://dawa.aws.dk';
  $('#adresse').dawaautocomplete({
    baseUrl: baseurl,
    select: function(event, data) {
      $('#adresse-choice').text(data.tekst);
    }
  });
  $('#adgangsadresse').dawaautocomplete({
    baseUrl: baseurl,
    adgangsadresserOnly: true,
    select: function(event, data) {
      $('#adgangsadresse-choice').text(data.tekst);
    }
  });
  $('#adresse-kbh').dawaautocomplete({
    baseUrl: baseurl,
    params: {
      kommunekode: "101"
    },
    select: function(event, data) {
      $('#adresse-kbh-choice').text(data.tekst);
    }
  });
})