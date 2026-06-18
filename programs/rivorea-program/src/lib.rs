use anchor_lang::prelude::*;

declare_id!("Rivorea11111111111111111111111111111111");

#[program]
pub mod rivorea {
    use super::*;

    pub fn initialize_player(ctx: Context<InitPlayer>) -> Result<()> {
        let player = &mut ctx.accounts.player;
        player.balance = 0;
        Ok(())
    }
}

#[account]
pub struct PlayerAccount {
    pub balance: u64,
}

#[derive(Accounts)]
pub struct InitPlayer<'info> {
    #[account(init, payer = user, space = 8 + 8)]
    pub player: Account<'info, PlayerAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}
