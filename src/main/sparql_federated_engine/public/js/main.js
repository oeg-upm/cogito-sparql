const yasqe = YASQE(document.getElementById("yasqe"), {
  sparql: {
    showQueryButton: true,
  },
});
const yasr = YASR(document.getElementById("yasr"), {
  //this way, the URLs in the results are prettified using the defined prefixes in the query
  getUsedPrefixes: yasqe.getPrefixesFromQuery,
});

$(document.getElementsByClassName("yasqe_queryButton query_valid")).on('click', makeQuery);

function makeQuery() {
  
  $.ajax({
    type: "GET",
    url: "/sparql",
    data: {
      query: yasqe.getValue(),
    },
    success: (data, textStatus, jqXHR) => {
      console.log(data, textStatus, jqXHR);
      yasr.setResponse(data);
    },
    contentType: "application/json",
    dataType: "json",
  });
}

//link both together
//yasqe.options.sparql.callbacks.complete = yasr.setResponse;
