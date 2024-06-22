import json

from fastapi import APIRouter

from api.schema import FundGraphResponse, ChainId, FundGraphEdge, ChainAddress
from api.utils import try_parse_obj_as

route = APIRouter(
    prefix="/graph",
)

f = open('data.json')
data = json.load(f)

@route.get("/{chain}/{address}", response_model=FundGraphResponse)
def get_address_graph(
        address: str,
        chain: ChainId,
):
    filtered_edges = list(filter(lambda obj: 
        (obj['source']['address'] == address and obj['source']['chain_id'] == chain) or
        (obj['dest']['address'] == address and obj['dest']['chain_id'] == chain), data))
    
    return { "edges": filtered_edges }