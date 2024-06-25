"use client";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { createTheme } from "@mui/material/styles";

import { MdFolderDelete } from "react-icons/md";
import styles from "./postGrid.module.css";
import { useState } from "react";

const PostGrid = ({ posts }) => {
    const theme = createTheme({
        mixins: {
            MuiDataGrid: {
                // Pinned columns sections
                pinnedBackground: "#340606",
                // Headers, and top & bottom fixed rows
                containerBackground: "#343434",
            },
        },
    });

    async function handleDelete(id) {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post?id=${id}`, { method: "DELETE" });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            const data = await response.json();

            // Remove the deleted post from the grid
            setRows((prevRows) => prevRows.filter((row) => row.id !== id));
        } catch (error) {
            console.error("Failed to delete post:", error.message);
        }
    }

    const columns = [
        // { field: "id", headerName: "ID", width: 200 },
        { field: "title", headerName: "Title", width: 130, headerClassName: "super-app-theme--header" },
        { field: "category", headerName: "Category", width: 80 },
        { field: "views", headerName: "Views", width: 80 },
        {
            field: "fullName",
            headerName: "Author",
            description: "This column has a value getter and is not sortable.",
            sortable: false,
            width: 160,
        },
        { field: "createdAt", headerName: "Created At", width: 160 },
        {
            field: "actions",
            type: "actions",
            headerName: "Delete",
            width: 100,
            cellClassName: "actions",
            getActions: ({ id }) => {
                return [
                    <GridActionsCellItem
                        icon={<MdFolderDelete className={styles.deleteIcon} />}
                        label='Delete'
                        onClick={() => handleDelete(id)}
                        color='inherit'
                    />,
                ];
            },
        },
    ];

    const initialRows = posts.map((post) => ({
        id: post.id,
        title: post.title,
        category: post.catSlug,
        views: post.views,
        fullName: post.user.name,
        createdAt: new Date(post.createdAt).toDateString(),
    }));

    const [rows, setRows] = useState(initialRows); // for updating the grid

    return (
        <div className={styles.container}>
            <DataGrid
                className={styles.grid}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 8 },
                    },
                }}
                pageSizeOptions={[8, 10]}
                // checkboxSelection
                // getRowClassName={(params) => "highlight"}
                sx={{
                    '& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell, & .MuiDataGrid-footerContainer': {
                     backgroundColor: "white",
                     color: "black",
                     fontWeight: 500,
                  },
                  textAlign: 'center',

                }}
            />
        </div>
    );
};

export default PostGrid;
