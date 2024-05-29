import "./listPage.scss";

import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import CardSekelton from "@/components/card/CardSekelton";
import Filter from "@/components/filter/Filter";
import Card from "@/components/card/Card";
import Map from "@/components/map/Map";

function ListPage() {
  const data = useLoaderData();

  return (
    <div className="listPage">
      <div className="listContainer">
        <SimpleBar style={{ height: "100%" }}>
          <div className="wrapper">
            <Filter />

            <Suspense fallback={<CardSekelton times={3} />}>
              <Await
                resolve={data.postResponse}
                errorElement={<p>Error loading posts!</p>}
              >
                {(postResponse) =>
                  postResponse.data.map((post) => (
                    <Card key={post.id} item={post} />
                  ))
                }
              </Await>
            </Suspense>
          </div>
        </SimpleBar>
      </div>
      <div className="mapContainer">
        <Suspense
          fallback={
            <p
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            >
              Loading map...
            </p>
          }
        >
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading map!</p>}
          >
            {(postResponse) => <Map items={postResponse.data} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}

export default ListPage;
