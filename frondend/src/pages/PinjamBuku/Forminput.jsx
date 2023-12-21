import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Forminput = (props) => {
    const {
        show,
        close,
        handleChange,
        handleCheckbox,
        errors,
        savehandler,
        PinjamBukuModel,
        mode,
        EditHandler,
        deleteDataPinjamBuku,
    } = props;

    var title;
    var button;

    if (mode === "create") {
        title = <Modal.Title>Create New</Modal.Title>;
        button = (
            <Button variant="primary" onClick={savehandler}>
                Save Changes
            </Button>
        );
    } else if (mode === "edit") {
        title = <Modal.Title>Edit Data</Modal.Title>;
        button = (
            <Button variant="warning" onClick={EditHandler}>
                Update data
            </Button>
        );
    } else {
        title = <Modal.Title>Delete Data</Modal.Title>;
        button = <Button variant="danger" onClick={deleteDataPinjamBuku}>Delete Data</Button>;
    }
    return (
        <Modal show={show} onHide={close}>
            <Modal.Header closeButton>{title}</Modal.Header>
            <Modal.Body>
                {mode === "delete" ? (
                    <h5>apakah anda yakin ingin menghapus data ini?</h5>
                ) : (
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Nama Buku</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                type="text"
                                placeholder="Nama Buku"
                                name="nama_buku"
                                value={PinjamBukuModel.nama_buku}
                            />
                            <Form.Text className="text-danger">
                                {errors.Nama_Buku}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Nama Peminjam</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Peminjam"
                                onChange={handleChange}
                                name="nama_peminjam"
                                value={PinjamBukuModel.nama_peminjam}
                            />
                            <Form.Text className="text-danger">
                                {errors.Nama_Peminjam}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                label="Pengembalian"
                                onChange={handleCheckbox}
                                name="pengembalian"
                                checked={PinjamBukuModel.pengembalian}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                label="Active"
                                onChange={handleCheckbox}
                                name="is_active"
                                checked={PinjamBukuModel.is_active}
                            />
                        </Form.Group>
                    </Form>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>
                    Close
                </Button>
                {button}
            </Modal.Footer>
        </Modal>
    );
};

export default Forminput;
