import "./App.css";
import React from "react";

import DirectFather from "./components/communication/DirectFather";
import IndirectFather from "./components/communication/IndirectFather";
import Card from "./components/layout/Card";
import Fragment from "./components/basics/Fragment";
import UsingParameter from "./components/basics/UsingParameter";
import First from "./components/basics/First";
import Random from "./components/basics/Random";
import Family from "./components/basics/Family";
import FamilyRelative from "./components/basics/FamilyRelative";
import ListStudents from "./components/loop/ListStudents";
import TableProducts from "./components/loop/TableProducts";
import OddOrEven from "./components/conditional/OddOrEven";
import UserInfo from "./components/conditional/UserInfo";

export default _ => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card title="Comunicação Indireta" color="#59323C">
                    <IndirectFather></IndirectFather>
                </Card>

                <Card title="Comunicação Direta" color="#59323C">
                    <DirectFather></DirectFather>
                </Card>

                <Card title="Renderização Condicional" color="#982395">
                    <OddOrEven number={20} />
                    <UserInfo user={{}} />
                    <UserInfo user={{ name: "Carlos" }} />
                    <UserInfo user={{ name: "" }} />
                </Card>

                <Card title="Repetição Desafio" color="#FF4C65">
                    <TableProducts></TableProducts>
                </Card>

                <Card title="Repetição" color="#FF4C65">
                    <ListStudents></ListStudents>
                </Card>

                <Card title="Componentes com filhos" color="#00C8F8">
                    <Family familyName="Silva">
                        <FamilyRelative name="Carlos" />
                        <FamilyRelative name="Joaquim" />
                        <FamilyRelative name="Alberto" />
                    </Family>
                </Card>

                <Card title="Desafio Aleatório" color="#FA6900">
                    <Random
                        min={2}
                        max={200} />
                </Card>

                <Card title="Fragment" color="#E94C67">
                    <Fragment />
                </Card>

                <Card title="Using Parameter" color="#E8B71A">
                    <UsingParameter
                        title="Second Component"
                        subtitle="Nice" />
                </Card>

                <Card title="First" color="#080" color="#588C73">
                    <First />
                </Card>
            </div>
        </div>
    )
}