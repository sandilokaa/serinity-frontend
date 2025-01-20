import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataClothDetail, selectClothDetail, resetProductDetail } from "../../../redux/slices/ItemDetailSlice";

import { ReactComponent as CloseIcon } from "../../../assets/images/icons/close.svg";

const ModalChartNote = ({ onClose, productId }) => {

    const [activeTab, setActiveTab] = useState('sizeChart');

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const dispatch = useDispatch();
    const product = useSelector(selectClothDetail);

    useEffect(() => {
        if (productId) {
            dispatch(resetProductDetail());
            dispatch(fetchDataClothDetail(productId));
        }
    }, [productId, dispatch]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white px-9 py-4 w-[1000px] h-[auto]">
                <div className="text-black text-right">
                    <button onClick={onClose}>
                        <CloseIcon />
                    </button>
                </div>
                <div className="flex flex-col justify-center pt-[10px] pb-[10px]">
                    <div className="flex justify-center gap-4">
                        <div>
                            <p
                                className={
                                    `cursor-pointer ${activeTab === 'sizeChart' ? 'font-bold underline' : ''}`
                                }
                                onClick={() => setActiveTab('sizeChart')}
                            >
                                Size Chart
                            </p>
                        </div>
                        <div>
                            <p
                                className={
                                    `cursor-pointer ${activeTab === 'note' ? 'font-bold underline' : ''}`
                                }
                                onClick={() => setActiveTab('note')}
                            >
                                Note
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-[25px]">
                        {activeTab === 'sizeChart' && (
                            <div>
                                {product.size_chart?.file_name ? (
                                    <img
                                        src={`http://localhost:8080/${product.size_chart?.file_name}`}
                                        alt="img"
                                        className="w-[600px]"
                                    />
                                ) : (
                                    <p>No image available</p>
                                )}
                            </div>
                        )}
                        {activeTab === 'note' && (
                            <div className="flex gap-5">
                                <div className="flex flex-col gap-[15px]">
                                    <p>
                                        <strong>Verifikasi Pesanan:</strong> Pastikan semua detail pesanan (ukuran, warna, dan model) sudah benar sebelum melakukan pembayaran.
                                        Kami tidak dapat mengubah atau membatalkan pesanan setelah diproses.
                                    </p>
                                    <p>
                                        <strong>Video Unboxing:</strong> Untuk keluhan terkait kerusakan atau kesalahan produk, wajib melampirkan video unboxing yang jelas dan 
                                        lengkap. Tanpa video unboxing, komplain tidak dapat diproses.
                                    </p>
                                    <p>
                                        <strong>Label Pengiriman:</strong> Jangan lupa sertakan foto label pengiriman saat mengajukan komplain, agar mempermudah verifikasi data pesanan.
                                    </p>
                                    <p>
                                        <strong>Kondisi Produk:</strong> Pastikan produk yang akan dikembalikan dalam kondisi baru, belum dipakai, dan lengkap dengan label serta kemasan aslinya.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-[15px]">
                                    <p>
                                        <strong>Waktu Pengajuan Komplain:</strong> Semua keluhan harus diajukan maksimal 3×24 jam setelah produk diterima. Pengajuan komplain di 
                                        luar batas waktu tersebut tidak dapat kami layani.
                                    </p>
                                    <p>
                                        <strong>Keterbatasan Garansi:</strong> Produk dengan diskon besar (sale) tidak dapat ditukar atau dikembalikan, kecuali ada kerusakan yang terverifikasi.
                                    </p>
                                    <p>
                                        <strong>Layanan Pelanggan: </strong> Untuk pertanyaan lebih lanjut, silakan hubungi tim customer service melalui email atau WhatsApp resmi kami 
                                        pada hari kerja pukul 09.00–18.00 WIB.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalChartNote;