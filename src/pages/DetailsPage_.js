import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Fade } from "react-reveal";

import Header from "parts/Header";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailTitle from "parts/PageDetailTitle";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm2";
import Activities from "parts/Activities";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";
import { useCallback } from "react";
import { fetchPage } from 'store/actions/page';

function DetailsPage() {
  const page = useSelector((state) => state.page);
  const { id } = useParams();
  const dispatch = useDispatch();

  const breadcrumb = [
    { pageTitle: "Home", pageHref: "/" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  const fnLoadPage = useCallback(async (id) => {
    if (!page[id]) {
      const response = await dispatch(fetchPage(`/detail-page/${id}`, id));
      document.title = `Staycation | ${response.title}`
    }
  },
    [id],
  )


  useEffect(() => {
    window.scrollTo(0, 0);

    fnLoadPage(id);
  }, [id])


  if (!page[id]) return null;

  return (
    <>
      <Header />
      <PageDetailTitle breadcrumb={breadcrumb} />
      <FeaturedImage />

      <section className='container'>
        <div className="row">
          <div className="col-12 col-lg-7 pr-5">
            <Fade bottom>
              <PageDetailDescription data={page[id]} />
            </Fade>
          </div>
          <div className="col-12 col-lg-5 card">
            <Fade bottom>
              <BookingForm />
            </Fade>
          </div>
        </div>
      </section>

      <Activities data={page[id].activityId} />
      <Testimony data={page[id].testimonial} />
      <Footer />
    </>
  );
}

export default DetailsPage;
