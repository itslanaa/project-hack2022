import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Input,
  InputGroup,
  Row,
  Spinner,
  Table,
} from 'reactstrap';
import { fetchPokemon } from '../../../redux/actions/pokemonActions';

const ApiTable = () => {
  const dispatch = useDispatch();
  const [pokemonCount, setPokemonCount] = useState(10);
  const pokemon = useSelector(state => state.pokemon.pokemon);
  const isFetching = useSelector(state => state.pokemon.isFetching);

  const pokemonCountHandler = (e) => {
    setPokemonCount(e.target.value);
  };

  const onFetch = () => {
    dispatch(fetchPokemon(pokemonCount));
  };

  // fetch pokemon when page load
  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Api table</h3>
          <h3 className="page-subhead subhead">Example of fetch data and pass it in table</h3>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={12} xl={12}>
          <Card>
            <CardBody>
              <div className="card__title">
                <h5 className="bold-text">Pokemon</h5>
              </div>
              <div className="mb-3">
                <InputGroup className="d-flex align-items-center">
                  <Input
                    value={pokemonCount}
                    placeholder="Count"
                    type="number"
                    onChange={pokemonCountHandler}
                  />
                  <Button className="mb-0 ml-3" onClick={onFetch}>Fetch</Button>
                </InputGroup>
              </div>
              { isFetching && <Spinner className="table-fetch-spinner" /> }
              {pokemon && !isFetching && (
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Base experience</th>
                      <th>Height</th>
                      <th>Weight</th>
                      <th>Api url</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pokemon.map(elem => (
                      <tr key={elem.id}>
                        <td className="firs-letter-uppercase">{elem.name}</td>
                        <td className="firs-letter-uppercase">{elem.base_experience}</td>
                        <td className="firs-letter-uppercase">{elem.height}</td>
                        <td className="firs-letter-uppercase">{elem.weight}</td>
                        <td>
                          <a href={elem.url} target="_blank" rel="noreferrer">
                            {elem.url}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ApiTable;
