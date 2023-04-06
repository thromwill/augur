"""Add unique to repo group name

Revision ID: 16
Revises: 15
Create Date: 2023-04-06 08:54:38.583034

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '16'
down_revision = '15'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint('rg_name_unique', 'repo_groups', ['rg_name'], schema='augur_data')
    
def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('rg_name_unique', 'repo_groups', schema='augur_data', type_='unique')
    # ### end Alembic commands ###