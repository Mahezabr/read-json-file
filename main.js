var header = $('h1')
var tombol = $('tombol')
var list = ('#list')

$.getJSON("data.json", function(result){
    console.log(result)
    result.data.forEach((datum,key) => {
        console.log(datum)
        
        //var nama = "<p>"+datum.nama+"</p>"
        //var nim = "<p>"+datum.nim+"</p>"
        //var email = "<p>"+datum.email+"</p>"
        //var kartu = "<div class='col-4 card mx-2'>"+nama+nim+email+"</div>"

        //$('#list').append(kartu)

        var id = "<td>"+(key+=1)+"</td>"
        var nama = "<td>"+datum.nama+"</td>"
        var nim = "<td>"+datum.nim+"</td>"
        var email = "<td>"+datum.email+"</td>"
        var tr = "<tr>"+id+nama+nim+email+"</tr>"

        $('#tbody').append(tr)
    })
    
})

var tambah = $('#tambah')
tombol.click(function(){
    e.preventDefault()
    var nama = $('#nama').val()
    var nim = $('#nim').val()
    var nim = $('#email').val()
    var data = {nama,nim,email}
    console.log({data})
})