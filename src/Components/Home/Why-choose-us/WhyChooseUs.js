import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./whyChooseUs.css";
import { CardMedia } from "@mui/material";
import book from "../../../images/book-outline.gif";
import congrats from "../../../images/congrats.gif";
import recycling from "../../../images/recycling-outline.gif";
import Globe from "../../../images/globe-outline.gif";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));
const WhyChooseUs = () => {
    return (
        <Grid
            container
            spacing={6}
            sx={{ alignItems: "center", width: "95%", margin: "0 auto" }}
        >
            <Grid item xs={12} md={6}>
                <Item id="non-shadow">
                    <Box
                        sx={{
                            display: "grid",
                            gap: 5,
                            gridTemplateColumns: "repeat(2, 1fr)",
                        }}
                    >
                        <Item
                            sx={{
                                boxShadow: "0px 0px 56px 6px #c9c9c9",
                                borderRadius: 2,
                                textAlign: "left",
                                padding: "35px",
                            }}
                        >
                            <CardMedia
                                component="img"
                                // height="140"
                                image={book}
                                alt="green iguana"
                                sx={{ width: "50%" }}
                            />

                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: "bold",
                                    margin: " 12px 0px",
                                    color: "black",
                                }}
                            >
                                Visit my Blog
                            </Typography>
                            <Typography
                                variant="p"
                                className="mt_-12"
                                sx={{
                                    color: "#252B31",
                                    fontFamily: `Lato,Sans-serif`,
                                    fontSize: "16px",
                                    fontWeight: "400",
                                    lineHeight: "24px",
                                }}
                            >
                                We use creative ideas for your future success.
                            </Typography>
                        </Item>
                        <Item
                            sx={{
                                boxShadow: "0px 0px 56px 6px #c9c9c9",
                                borderRadius: 2,
                                textAlign: "left",
                                padding: "35px",
                            }}
                        >
                            <CardMedia
                                component="img"
                                // height="140"
                                image={congrats}
                                alt="green iguana"
                                sx={{ width: "50%" }}
                            />
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: "bold",
                                    margin: " 12px 0px",
                                    color: "black",
                                }}
                            >
                                My Podcasts
                            </Typography>
                            <Typography variant="p" className="mt_-12">
                                We use creative ideas for your future success.
                            </Typography>
                        </Item>
                        <Item
                            sx={{
                                boxShadow: "0px 0px 56px 6px #c9c9c9",
                                borderRadius: 2,
                                textAlign: "left",
                                padding: "35px",
                            }}
                        >
                            <CardMedia
                                component="img"
                                // height="140"
                                image={recycling}
                                alt="green iguana"
                                sx={{ width: "50%" }}
                            />
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: "bold",
                                    margin: " 12px 0px",
                                    color: "black",
                                }}
                            >
                                View Videos
                            </Typography>
                            <Typography variant="p" className="mt_-12">
                                We use creative ideas for your future success.
                            </Typography>
                        </Item>
                        <Item
                            sx={{
                                boxShadow: "0px 0px 56px 6px #c9c9c9",
                                borderRadius: 2,
                                textAlign: "left",
                                padding: "35px",
                            }}
                        >
                            <CardMedia
                                component="img"
                                // height="140"
                                image={Globe}
                                alt="green iguana"
                                sx={{ width: "50%" }}
                            />
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: "bold",
                                    margin: " 12px 0px",
                                    color: "black",
                                }}
                            >
                                Social Media
                            </Typography>
                            <Typography variant="p" className="mt_-12">
                                We use creative ideas for your future success.
                            </Typography>
                        </Item>
                    </Box>
                </Item>
            </Grid>
            <Grid
                item
                xs={12}
                md={6}
                sx={{
                    backgroundImage: `url("https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2020/03/home5_img_01.png")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right",
                }}
            >
                <Item id="non-shadow" sx={{ textAlign: "left" }}>
                    <Typography
                        variant="p"
                        sx={{
                            fontWeight: "bold",
                            color: " #8582A2",
                            fontSize: "14px",
                            fontWeight: "700",
                            textTransform: "uppercase",
                            lineHeight: "1.5em",
                        }}
                    >
                        WHY CHOOSE US
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            color: "#030C26",
                            fontSize: "43px",
                            fontWeight: "700",
                            lineHeight: "43px",
                            width: "90%",
                            margin: "20px 0px",
                        }}
                    >
                        Change the Way You See Social
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "16px",
                            color: "#696687",
                            fontFamily: "Rubik",
                            fontWeight: "400",
                        }}
                    >
                        We are passionate about our work. Our designers stay ahead of the
                        curve to provide engaging and user-friendly website designs to make
                        your business stand out. Our developers are committed to maintaining
                        the highest web standards so that your site will withstand the test
                        of time.
                    </Typography>
                </Item>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Item
                            id="non-shadow"
                            sx={{ textAlign: "left", fontSize: "17px", fontWeight: "bold" }}
                        >
                            <CardMedia
                                component="img"
                                // height="140"
                                image="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2021/05/check12.png"
                                alt="green iguana"
                                sx={{ width: "7%", display: "inline", marginRight: "5px" }}
                            />{" "}
                            <Typography
                                variant="span"
                                sx={{
                                    color: "#030C26",

                                    fontSize: "16px",
                                    fontWeight: "700",
                                    lineHeight: "18px",
                                }}
                            >
                                Understand Your Audience
                            </Typography>
                        </Item>
                        <Item
                            id="non-shadow"
                            sx={{ textAlign: "left", fontSize: "17px", fontWeight: "bold" }}
                        >
                            <CardMedia
                                component="img"
                                // height="140"
                                image="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2021/05/check12.png"
                                alt="green iguana"
                                sx={{ width: "7%", display: "inline", marginRight: "5px" }}
                            />{" "}
                            <Typography
                                variant="span"
                                sx={{
                                    color: "#030C26",

                                    fontSize: "16px",
                                    fontWeight: "700",
                                    lineHeight: "18px",
                                }}
                            >
                                Reach Your Audience
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item
                            id="non-shadow"
                            sx={{ textAlign: "left", fontSize: "17px", fontWeight: "bold" }}
                        >
                            <CardMedia
                                component="img"
                                // height="140"
                                image="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2021/05/check12.png"
                                alt="green iguana"
                                sx={{ width: "7%", display: "inline", marginRight: "5px" }}
                            />{" "}
                            <Typography
                                variant="span"
                                sx={{
                                    color: "#030C26",

                                    fontSize: "16px",
                                    fontWeight: "700",
                                    lineHeight: "18px",
                                }}
                            >
                                Engage Your Community
                            </Typography>
                        </Item>{" "}
                        <Item
                            id="non-shadow"
                            sx={{ textAlign: "left", fontSize: "17px", fontWeight: "bold" }}
                        >
                            <CardMedia
                                component="img"
                                // height="140"
                                image="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2021/05/check12.png"
                                alt="green iguana"
                                sx={{ width: "7%", display: "inline", marginRight: "5px" }}
                            />
                            <Typography
                                variant="span"
                                sx={{
                                    color: "#030C26",

                                    fontSize: "16px",
                                    fontWeight: "700",
                                    lineHeight: "18px",
                                }}
                            >
                                Engage Your Community
                            </Typography>
                        </Item>
                    </Grid>
                </Grid>
                <Button
                    sx={{
                        borderRadius: "4rem",
                        padding: "12px 30px",
                        fontWeight: "bold",
                        border: "2px solid #ddd",
                        color: "#9b9696",
                        marginTop: "1rem",
                        fontSize: "12px",
                    }}
                >
                    Descover More
                </Button>
            </Grid>
        </Grid>
    );
};
export default WhyChooseUs;