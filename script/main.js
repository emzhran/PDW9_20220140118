function handleSubmission() {
    var name = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var quantity = document.getElementById("jumlah").value;
    var film = document.getElementById("movie").value;
    var paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    var tanggal = new Date(document.getElementById("tanggal").value).toLocaleDateString('id-ID');
    var jam = document.getElementById("jam").value;

    var availableTimes = ["12:00", "15:00", "18:00", "20:00", "22:00"];
    if (!availableTimes.includes(jam)) {
        Swal.fire({
            title: "Error",
            text: "Please select a valid time.",
            icon: "error",
            customClass: {
                title: "swal-title",
                closeButton: "swal-close-button",
                popup: "swal-popup"
            }
        });
        return;
    }
    

    var alertHTML = `
        <div class="form-values">
            <div class="form-group">
                <label for="nama" style="width: 130px;">Nama : </label>
                <input type="text" value="${name}" readonly />
            </div>
            <div class="form-group">
                <label for="email" style="width: 130px;">Email :</label>
                <input type="text" value="${email}" readonly />
            </div>
            <div class="form-group">
                <label for="film" style="width: 130px;">Film : </label>
                <input type="text" value="${film}" readonly />
            </div>
            <div class="form-group">
                <label for="jumlah" style="width: 130px;">Jumlah :</label>
                <input type="text" value="${quantity}" readonly />
            </div>
            <div class="form-group">
                <label for="paymentMethod" style="width: 130px;">Payment :</label>
                <input type="text" value="${paymentMethod}" readonly />
            </div>
            <div class="form-group">
            <label for="tanggal" style="width: 130px;">Tanggal :</label>
            <input type="text" value="${tanggal}" readonly />
        </div>
        <div class="form-group">
            <label for="jam" style="width: 130px;">Jam (WIB) :</label>
            <input type="text" value="${jam}" readonly />
        </div>
        </div>`;

        // untuk membuat judul dan button
    Swal.fire({
        title: "Konfirmasi Pembelian Tiket",
        html: alertHTML,
        showCancelButton: true,
        confirmButtonText: "Otewe",
        cancelButtonText: "Gajadi",
        confirmButtonColor: "#3885d6",
        cancelButtonColor: "#d33",
        customClass: {
            title: "swal-title",
            htmlContainer: "swal-html-container",
            confirmButton: "swal-confirm-button",
            cancelButton: "swal-cancel-button",
            popup: "swal-popup"
        }
        // ketika melakukan konfirmasi
    }).then((result) => {
        if (result.isConfirmed) {
            var ticketData = {
                name: name,
                email: email,
                film: film,
                jumlah: jumlah,
                paymentMethod: paymentMethod
            };
            console.log(ticketData);
            Swal.fire({
                title: "Terima Kasih",
                text: "Terima kasih , kamu akan segera mendapat email",
                icon: "success",
                customClass: {
                    title: "swal-title",
                    closeButton: "swal-close-button",
                    popup: "swal-popup"
                },
                onOpen: function() {
                    document.querySelector('.swal-modal').style.top = '50%';
                    document.querySelector('.swal-modal').style.left = '50%';
                    document.querySelector('.swal-modal').style.transform = 'translate(-50%, -50%)';
                }
            });
            // ketika melakukan pembatalan
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
                title: "Dibatalkan",
                text: "Pembelian tiket dibatalkan :(",
                icon: "error",
                customClass: {
                    title: "swal-title",
                    closeButton: "swal-close-button",
                    popup: "swal-popup"
                },
                onOpen: function() {
                    document.querySelector('.swal-modal').style.top = '50%';
                    document.querySelector('.swal-modal').style.left = '50%';
                    document.querySelector('.swal-modal').style.transform = 'translate(-50%, -50%)';
                }
            });
        }
    });
}
