$("#pdf_download").click(function ()
{
	console.log("pdf wants to download");
	window.open('/pdf');
});
$("#word_download").click(function ()
{
	window.open('/word');
});
