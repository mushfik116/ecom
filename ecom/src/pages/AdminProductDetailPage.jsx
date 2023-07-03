import React from "react";
import Navbar from "../features/navbar/Navbar";
import AdminProductDetail from "../features/admin/AdminProductDetail";

const AdminProductDetailPage = () => {
  return (
    <div>
      <Navbar>
        <AdminProductDetail />
      </Navbar>
    </div>
  );
};

export default AdminProductDetailPage;
