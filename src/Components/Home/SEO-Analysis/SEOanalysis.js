import React from "react";
import { useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const SEOanalysis = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <>
            <Grid
                container
                spacing={2}
                id="SEOanalysisContainer"
                sx={{ width: "100%", alignItems: "center", mt: 7 }}
            >
                <Grid item xs={12} md={6}>
                    <Item id="non-shadow">
                        <CardMedia
                            component="img"
                            // height="140"
                            image="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2021/01/home10_img5.jpg"
                            alt="green iguana"
                            sx={{ width: "100%" }}
                        />{" "}
                    </Item>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ marginLeft: "15px" }}>
                        <Typography
                            variant="h4"
                            sx={{
                                color: "#3b3663",
                                fontWeight: "800",
                                fontFamily: "Nunito",
                                margin: "10px 0px",
                            }}
                        >
                            Get Free SEO Analysis?
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{
                                fontWeight: "100",
                                fontSize: "20px",
                                color: "#757290",
                                margin: "30px 0px",
                            }}
                        >
                            Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case
                            regione signiferumque vim te.
                        </Typography>{" "}
                    </Box>
                    <Item id="non-shadow">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={0} sx={{ marginBottom: "10px" }}>
                                <Grid item xs={6}>
                                    <Item id="non-shadow">
                                        <TextField
                                            sx={{ width: "100%" }}
                                            {...register("name", { required: true })}
                                            placeholder="Your Name"
                                            type="text"
                                        />{" "}
                                        <p
                                            style={{
                                                textAlign: "left",
                                                color: "red",
                                                margin: "0px 0px",
                                            }}
                                        >
                                            {errors.name?.type === "required" && " *name is required"}
                                        </p>{" "}
                                    </Item>
                                </Grid>
                                <Grid item xs={6}>
                                    <Item id="non-shadow">
                                        {" "}
                                        <TextField
                                            sx={{ width: "100%" }}
                                            {...register("email", { required: true })}
                                            type="email"
                                            placeholder="Your email"
                                        />
                                        <p
                                            style={{
                                                textAlign: "left",
                                                color: "red",
                                                margin: "0px 0px",
                                            }}
                                        >
                                            {errors.email && "*email address is required"}
                                        </p>
                                    </Item>
                                </Grid>
                            </Grid>
                            <Grid container spacing={0} sx={{ marginBottom: "10px" }}>
                                <Grid item xs={6}>
                                    <Item id="non-shadow">
                                        <TextField
                                            sx={{
                                                width: "100%",
                                            }}
                                            {...register("phone", { required: true })}
                                            placeholder="Your / company Phone number"
                                            type="number"
                                        />
                                        <p
                                            style={{
                                                textAlign: "left",
                                                color: "red",
                                                margin: "0px 0px",
                                            }}
                                        >
                                            {errors.phone?.type === "required" &&
                                                "*phone number is required"}
                                        </p>
                                    </Item>
                                </Grid>
                                <Grid item xs={6}>
                                    <Item id="non-shadow">
                                        {" "}
                                        <TextField
                                            sx={{ width: "100%" }}
                                            {...register("website", { required: true })}
                                            placeholder="Website URL"
                                            type="text"
                                        />
                                        <p
                                            style={{
                                                textAlign: "left",
                                                color: "red",
                                                margin: "0px 0px",
                                            }}
                                        >
                                            {errors.website && "*website address is required"}
                                        </p>
                                    </Item>
                                </Grid>
                            </Grid>
                            <textarea
                                sx={{ width: "100%" }}
                                {...register("message", { required: true })}
                                cols="65"
                                rows="10"
                                placeholder="Write Message"
                                type="text"
                            ></textarea>
                            <p style={{ textAlign: "left", color: "red", margin: "0px 0px" }}>
                                {errors.message && "*message is required"}
                            </p>
                            <div>
                                <input type="submit" value="Send Message" />
                            </div>
                        </form>
                    </Item>
                </Grid>
            </Grid>
        </>
    );
};

export default SEOanalysis;