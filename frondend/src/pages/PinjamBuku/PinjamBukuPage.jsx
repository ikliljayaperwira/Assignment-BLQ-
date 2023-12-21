import React from "react";
import PinjamBukuService from "../../services/PinjamBukuService";
import Button from "react-bootstrap/Button";
import Forminput from "./Forminput";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.css"

export default class PinjamBuku extends React.Component {
    PinjamBukuModel = {
        nama_buku: "",
        nama_peminjam: "",
        pengembalian: false,
        is_active: false,
    };

    constructor() {
        super();

        this.state = {
            listPinjamBuku: [],
            show: false,
            PinjamBukuModel: this.PinjamBukuModel,
            errors: {},
            mode: ""
        };
    }

    haldegetPinjamBuku = async () => {
        const reponse = await PinjamBukuService.getAllPinjamBuku();

        if (reponse.success) {
            this.setState({
                listPinjamBuku: reponse.data,
            });
        }
    };

    componentDidMount() {
        this.haldegetPinjamBuku();
    }

    handleClose = () => {
        this.setState({
            show: true,
            mode: 'create',
            PinjamBukuModel: this.PinjamBukuModel
        });
    };

    closemodale = () => {
        this.setState({
            show: false,
        });
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            PinjamBukuModel: {
                ...this.state.PinjamBukuModel,
                [name]: value,
            },
        });
    };

    handleCheckbox = (event) => {
        const { name, checked } = event.target;
        this.setState({
            PinjamBukuModel: {
                ...this.state.PinjamBukuModel,
                [name]: checked,
            },
        });
    };

    savehandler = async () => {
        const { PinjamBukuModel } = this.state;

        if (this.validationHandler()) {
            const response = await PinjamBukuService.addDataPinjamBuku(PinjamBukuModel);
            if (response.success) {
                this.haldegetPinjamBuku();
                this.setState({
                    show: false,
                    PinjamBukuModel: this.PinjamBukuModel,
                });
            }
        }
    };

    validationHandler = () => {
        const { PinjamBukuModel } = this.state;

        var formIsValid = true;
        var errors = {};
        if (PinjamBukuModel.Nama_Buku === "") {
            formIsValid = false;

            errors.Nama_Buku = "Nama_Buku caoonot be empty";
        }

        if (PinjamBukuModel.Nama_Peminjam === "") {
            formIsValid = false;
            errors.Nama_Peminjam = "Nama_Peminjam cannot be empty";
        }

        this.setState({
            errors: errors,
        });

        return formIsValid;
    };

    openModalEdit = async (id) => {
        const response = await PinjamBukuService.getPinjamBukuById(id);
        if (response.success) {
            this.setState({
                show: true,
                mode: 'edit',
                PinjamBukuModel: response.data
            })
        }
    }

    EditHandler = async () => {
        const { PinjamBukuModel } = this.state
        const response = await PinjamBukuService.editDataPinjamBuku(PinjamBukuModel)
        if (response.success) {
            this.haldegetPinjamBuku()
            this.setState({
                show: false,
                PinjamBukuModel: this.PinjamBukuModel,
            })
        }
    }

    openModalDelete = (id) => {
        this.setState({
            show: true,
            mode: 'delete',
            PinjamBukuModel: { id: id },
        })
    }

    deleteDataPinjamBuku = async () => {
        const { PinjamBukuModel } = this.state
        const response = await PinjamBukuService.deleteDataPinjamBuku(PinjamBukuModel.id);
        if (response.success) {
            this.haldegetPinjamBuku()
            this.setState({
                show: false,
                PinjamBukuModel: this.PinjamBukuModel,
            })
        }
    }

    render() {
        const { listPinjamBuku, show, PinjamBukuModel, errors, mode } = this.state;
        console.log(PinjamBukuModel);
        console.log("list pinjam: ", listPinjamBuku);
        return (
            <>
                <Container>

                    <div className="container text-center">
                        <h1>PinjamBuku page</h1>
                        <Button onClick={this.handleClose}>create new</Button>
                    </div>
                    <div className="container text-center">
                        <table className="table table-sm table-bordered table-striped" border="1">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama Buku</th>
                                    <th>Nama Peminjam</th>
                                    <th>Pengembalian</th>
                                    <th>Active</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listPinjamBuku.map((data) => (
                                    <tr>
                                        <td className="text-center">{data.id}</td>
                                        <td className="text-center">{data.nama_buku}</td>
                                        <td className="text-center">{data.nama_peminjam}</td>
                                        <td className="text-center"> <Form.Check checked={data.pengembalian}></Form.Check></td>
                                        <td className="text-center"> <Form.Check checked={data.is_active}></Form.Check></td>
                                        <td>
                                            <button onClick={() => this.openModalEdit(data.id)}>edit</button>
                                            <button onClick={() => this.openModalDelete(data.id)}>delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Container>

                <Forminput
                    show={show}
                    close={this.closemodale}
                    handleChange={this.handleChange}
                    handleCheckbox={this.handleCheckbox}
                    savehandler={this.savehandler}
                    errors={errors}
                    PinjamBukuModel={PinjamBukuModel}
                    mode={mode}
                    EditHandler={this.EditHandler}
                    deleteDataPinjamBuku={this.deleteDataPinjamBuku}
                />
            </>
        );
    }
}
