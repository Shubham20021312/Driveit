import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    IconButton
} from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)//components/shared/DashboardCard';
import MegaphoneIcon from '@mui/icons-material/Campaign';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const products = [
    {
        id: "1",
        cars: "Sedan",
        category: "Luxury",
        status: "Available",
        duration: "1 year",
        revenue: "30.9",
        priority: "Low",
        pbg: "primary.main",
    },
    {
        id: "2",
        cars: "SUV",
        category: "Economy",
        status: "Rented",
        duration: "6 months",
        revenue: "24.5",
        priority: "Medium",
        pbg: "secondary.main",
    },
    {
        id: "3",
        cars: "Truck",
        category: "Utility",
        status: "Maintenance",
        duration: "3 months",
        revenue: "12.8",
        priority: "High",
        pbg: "error.main",
    },
    {
        id: "4",
        cars: "Convertible",
        category: "Luxury",
        status: "Available",
        duration: "2 years",
        revenue: "52.4",
        priority: "Critical",
        pbg: "success.main",
    },
];

const handleIconClick = (action, productId) => {
    console.log(`${action} clicked for product ID: ${productId}`);
    // Add your action handling logic here
};

const ProductPerformance = () => {
    return (
        <DashboardCard title="Product Performance">
            <Box sx={{ overflow: 'auto', width: { xs: '380px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow sx={{ backgroundColor: 'grey.200' }}>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Cars
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Category
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Status
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Duration
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Revenue
                                </Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Actions
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {product.cars}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={600}>
                                        {product.category}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.status}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.duration}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h6">${product.revenue}k</Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <IconButton onClick={() => handleIconClick('megaphone', product.id)}>
                                        <MegaphoneIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleIconClick('edit', product.id)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleIconClick('delete', product.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default ProductPerformance;
